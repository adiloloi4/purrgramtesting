import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const promotionCode = body.promotionCode; // e.g., 'LAUNCH50'

    // Get authenticated user
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is already subscribed
    const { data: profile } = await supabase
      .from('profiles')
      .select('is_subscribed')
      .eq('id', user.id)
      .single();

    if (profile?.is_subscribed) {
      return NextResponse.json({ error: 'Already purchased' }, { status: 400 });
    }

    // Create Stripe Checkout Session for one-time payment
    const origin = request.headers.get('origin') || 'http://localhost:3000';
    
    // If promotion code is provided, look it up and apply it
    let discounts: Array<{ promotion_code: string }> | undefined;
    if (promotionCode) {
      try {
        // List promotion codes to find the one matching our code
        const promotionCodes = await stripe.promotionCodes.list({
          code: promotionCode,
          limit: 1,
        });

        if (promotionCodes.data.length > 0 && promotionCodes.data[0].active) {
          discounts = [{ promotion_code: promotionCodes.data[0].id }];
        }
      } catch (error) {
        // If promotion code lookup fails, continue without it
        // User can still enter it manually if allow_promotion_codes is true
      }
    }
    
    const session = await stripe.checkout.sessions.create({
      mode: 'payment', // One-time payment
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      customer_email: user.email || undefined,
      // Only use allow_promotion_codes if we don't have a discount to apply
      // Stripe doesn't allow both parameters at the same time
      ...(discounts && discounts.length > 0 
        ? { discounts } 
        : { allow_promotion_codes: true }
      ),
      metadata: {
        userId: user.id,
        userEmail: user.email || '',
      },
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/paywall?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}


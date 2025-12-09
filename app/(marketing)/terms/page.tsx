"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
            <img src="/logo.png" alt="Purrgram" className="h-10 w-auto" />
            <span className="text-xl font-light text-white tracking-wide">Purrgram</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extralight text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-white/60 font-light mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-light text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Purrgram, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on Purrgram&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Purrgram&apos;s website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">3. Course Access</h2>
              <p>
                When you purchase access to Purrgram courses, you are granted lifetime access to the purchased content. This access is personal to you and may not be transferred or shared with others. We reserve the right to revoke access if these terms are violated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">4. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">5. Refund Policy</h2>
              <p>
                <strong>No Refunds:</strong> All sales are final. Due to the digital nature of our courses and the immediate access granted upon purchase, we do not offer refunds, returns, or exchanges under any circumstances. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Change of mind or dissatisfaction with the course content</li>
                <li>Inability to complete the course</li>
                <li>Technical issues (we will assist with technical support instead)</li>
                <li>Account access issues (we will help restore access)</li>
                <li>Purchases made by mistake</li>
              </ul>
              <p className="mt-4">
                By purchasing a course, you acknowledge and agree that you have read and understood this no-refund policy. If you experience any technical issues or need assistance, please contact our support team at support@purrgram.com and we will do our best to help you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">6. Content Ownership</h2>
              <p>
                All content on Purrgram, including but not limited to text, graphics, logos, images, and software, is the property of Purrgram and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">7. Prohibited Uses</h2>
              <p>You may not use our service:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code or viruses</li>
                <li>To attempt to gain unauthorized access to our systems</li>
                <li>To interfere with or disrupt the service or servers</li>
                <li>To share your account credentials with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">8. Disclaimer</h2>
              <p>
                The materials on Purrgram&apos;s website are provided on an &apos;as is&apos; basis. Purrgram makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">9. Limitations</h2>
              <p>
                In no event shall Purrgram or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Purrgram&apos;s website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">10. Revisions</h2>
              <p>
                Purrgram may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at support@purrgram.com.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}


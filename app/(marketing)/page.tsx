"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Map, Brain, Trophy, Rocket, 
  Terminal, Zap, Code2, Check,
  Star, Monitor, MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/neural-network-hero';
import { WaitlistForm } from '@/components/marketing/WaitlistForm';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="overflow-hidden bg-black min-h-screen text-white">
      {/* Hero Section */}
      <Hero 
        title="Turn ideas into apps with vibe coding."
        description="A gamified coding platform that lets you build SaaS with AI, without drowning in docs. Join the waitlist for early access."
        badgeText="Private Beta"
        badgeLabel="New"
        ctaButtons={[]}
        microDetails={["Gamified Learning", "AI Workflows", "Founder Badges"]}
      >
        <WaitlistForm />
      </Hero>

      {/* Tools Marquee / Social Proof */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
            <p className="text-center text-sm font-light text-white/40 mb-8 tracking-widest uppercase">The Vibe Stack</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Simple text representations for logos for now, can be replaced with SVGs */}
                 <span className="text-xl font-bold text-white">Next.js</span>
                 <span className="text-xl font-bold text-white">Tailwind</span>
                 <span className="text-xl font-bold text-white">Supabase</span>
                 <span className="text-xl font-bold text-white">Cursor</span>
                 <span className="text-xl font-bold text-white">Claude</span>
                 <span className="text-xl font-bold text-white">Vercel</span>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-b border-white/5 bg-black">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                  {[
                      { value: "10k+", label: "Vibe Coders" },
                      { value: "50k+", label: "Lines Generated" },
                      { value: "120+", label: "SaaS Launched" },
                      { value: "24/7", label: "Discord Activity" }
                  ].map((stat, i) => (
                      <div key={i}>
                          <div className="text-4xl md:text-5xl font-light text-white mb-2">{stat.value}</div>
                          <div className="text-sm font-light text-white/40 uppercase tracking-widest">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
                <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-tight">Not just another <br/>coding tutorial.</h2>
                <p className="text-white/60 text-lg font-light max-w-xl leading-relaxed">
                    Most courses teach you syntax you&apos;ll forget. We teach you the workflow to build products you&apos;ll launch.
                </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <motion.div variants={itemVariants}>
                    <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-colors">
                            <Map className="w-6 h-6 text-white/80 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-xl font-light text-white mb-3 tracking-tight">Game Map Curriculum</h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Forget linear tutorials. Navigate a Duolingo-style world map, unlocking worlds like &quot;The Brain&quot; (Backend) and &quot;The Cash Register&quot; (Payments).
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-colors">
                            <Brain className="w-6 h-6 text-white/80 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-xl font-light text-white mb-3 tracking-tight">AI Powered Workflows</h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Learn the &quot;God Mode&quot; workflow. We don&apos;t teach syntax memorization; we teach you how to orchestrate Cursor and Claude to write 80% of your code.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-colors">
                            <Trophy className="w-6 h-6 text-white/80 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-xl font-light text-white mb-3 tracking-tight">Gamified Progress</h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Earn XP, keep your streak alive, and unlock secret drops like &quot;Founder Protocols&quot; and &quot;Golden Prompts&quot; as you complete missions.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-extralight mb-6">The Old Way vs. The Vibe Way</h2>
                  <p className="text-white/60 text-lg font-light">Stop wasting time on configuration. Start building.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
                      <h3 className="text-xl font-medium text-white/60 mb-8 flex items-center gap-3">
                          <Monitor className="w-5 h-5" />
                          Traditional Coding
                      </h3>
                      <ul className="space-y-6">
                          {[
                              "Memorizing complex syntax",
                              "Reading docs for 4 hours",
                              "Debugging Webpack configs",
                              "Stuck on simple CSS issues",
                              "Building a Todo app (again)"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-4 text-white/40 font-light">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="p-8 rounded-2xl border border-purple-500/20 bg-purple-500/[0.03] relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-2xl border-b border-l border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
                          Vibe Mode
                      </div>
                      <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
                          <Zap className="w-5 h-5 text-purple-400" />
                          Vibe Coding
                      </h3>
                      <ul className="space-y-6">
                          {[
                              "Prompting natural language logic",
                              "Building production features in minutes",
                              "AI handles the boilerplate",
                              "Focusing on User Experience",
                              "Shipping a real SaaS business"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-4 text-white font-light">
                                  <div className="p-1 rounded-full bg-purple-500/20">
                                      <Check className="w-3 h-3 text-purple-400" />
                                  </div>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Philosophy / Deep Dive Section */}
      <section className="py-32 bg-black">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                     <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
                        <Zap className="w-3 h-3" />
                        The Vibe Coding Manifesto
                     </div>
                     <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight leading-tight">
                        Stop coding like it's 2015. <br/>
                        <span className="text-white/40">Start shipping like a founder.</span>
                     </h2>
                     <div className="space-y-8">
                         <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1">
                                 <Terminal className="w-5 h-5 text-white/60" />
                             </div>
                             <div>
                                 <h3 className="text-xl font-light text-white mb-2">Context is King</h3>
                                 <p className="text-white/50 font-light leading-relaxed">
                                     Don't write boilerplate. Learn how to feed context to LLMs so they understand your entire project structure instantly.
                                 </p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1">
                                 <Code2 className="w-5 h-5 text-white/60" />
                             </div>
                             <div>
                                 <h3 className="text-xl font-light text-white mb-2">Iterative Prompting</h3>
                                 <p className="text-white/50 font-light leading-relaxed">
                                     Coding is now conversation. Master the art of "prompt transfusion" to refine features in loops rather than writing lines character by character.
                                 </p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1">
                                 <Rocket className="w-5 h-5 text-white/60" />
                             </div>
                             <div>
                                 <h3 className="text-xl font-light text-white mb-2">Ship to Learn</h3>
                                 <p className="text-white/50 font-light leading-relaxed">
                                     Perfection is the enemy. Purrgram forces you to ship real features to unlock the next world. Theory comes after practice.
                                 </p>
                             </div>
                         </div>
                     </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-purple-900/10 blur-3xl rounded-full" />
                    <div className="relative bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-transparent" />
                        <pre className="font-mono text-xs md:text-sm text-white/70 overflow-x-auto">
{`// The Old Way
function fetchUser(id) {
  // spending 20 mins reading docs
  // debugging cors errors
  // writing manual types...
}

// The Vibe Way
// "Hey Claude, create a server action 
// to fetch user profile with strict 
// types and error handling."

export const getUser = async (id: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) throw new Error(error.message);
  return data;
};
// Generated in 3 seconds.
// You just saved 2 hours.`}
                        </pre>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Community Section */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-purple-500/30">
                  <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extralight mb-6">Join the Vibe Tribe</h2>
              <p className="text-white/60 text-lg font-light mb-10 max-w-xl mx-auto">
                  Get help, share your wins, and vibe with 10,000+ other builders in our exclusive Discord community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" className="h-12 px-8 rounded-full border-white/10 text-white hover:bg-white/10">
                      Join Discord
                  </Button>
                  <Button variant="outline" className="h-12 px-8 rounded-full border-white/10 text-white hover:bg-white/10">
                      Follow on Twitter
                  </Button>
              </div>
          </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-left mb-20">
                <div className="inline-flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-white/40" />
                    <span className="text-xs font-light tracking-widest uppercase text-white/60">The Path</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">From Idea to Revenue</h2>
                <p className="text-white/60 text-lg font-light max-w-xl">Your structured journey through the Purrgram ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                    { step: "01", title: "Choose your Magnum Opus", desc: "Don't build a todo app. Pick a real SaaS idea you care about. We'll help you scope it." },
                    { step: "02", title: "Follow the Game Map", desc: "Unlock worlds for Auth, Database, APIs, and Payments. Each world is a feature in your app." },
                    { step: "03", title: "Vibe Code with AI", desc: "Use Cursor and Claude to generate 80% of your code. Focus on logic and UX, not syntax." },
                    { step: "04", title: "Launch & Earn", desc: "Deploy to production, set up Stripe, and get your Founder Badge. Join the leaderboard." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group"
                    >
                        <div className="text-xs font-mono text-white/30 mb-4">{item.step}</div>
                        <h3 className="text-2xl font-light text-white mb-3 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                        <p className="text-white/50 font-light leading-relaxed border-l border-white/10 pl-4 group-hover:border-purple-500/30 transition-colors">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white/[0.02] border-t border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
             <div className="text-center mb-20">
                 <h2 className="text-3xl md:text-5xl font-extralight mb-6 tracking-tight">Vibe Coders Shipping</h2>
                 <p className="text-white/60 text-lg font-light">Join the builders who stopped tutorial hell and started shipping.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                     { 
                        name: "Alex Chen", 
                        role: "Frontend Dev", 
                        quote: "I built my first SaaS in 2 weeks. The gamification kept me addicted to fixing bugs. Unreal.",
                        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces"
                     },
                     { 
                        name: "Sarah Jones", 
                        role: "Product Manager", 
                        quote: "I can finally build my own ideas without waiting for a technical co-founder. Vibe coding is a superpower.",
                        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                     },
                     { 
                        name: "Marcus D.", 
                        role: "Designer", 
                        quote: "The 'God Mode' workflow changed how I see code. It's like painting with logic now. Highly recommend.",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                     }
                 ].map((t, i) => (
                     <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                         <div className="flex gap-1 mb-4 text-purple-400">
                             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                         </div>
                         <p className="text-white/70 font-light italic mb-6 leading-relaxed">"{t.quote}"</p>
                         <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold overflow-hidden relative">
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                             </div>
                             <div>
                                 <div className="text-sm font-medium text-white">{t.name}</div>
                                 <div className="text-xs text-white/40">{t.role}</div>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Course Teaser */}
      <section id="course-teaser" className="py-32 px-6 bg-gradient-to-b from-black to-slate-950 border-t border-white/5">
        <div className="container mx-auto text-center max-w-5xl">
             <div className="mb-16">
                 <h2 className="text-3xl md:text-5xl font-extralight mb-8 tracking-tight">The Curriculum</h2>
                 <div className="flex flex-wrap justify-center gap-2 md:gap-8 text-xs md:text-sm font-light text-white/40 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20" />Tutorial</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20" />Ignition</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20" />The Build</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20" />The Grind</span>
                    <span className="flex items-center gap-2 text-purple-400"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />The Payday</span>
                 </div>
             </div>

             <div className="relative p-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                 <div className="bg-black/90 rounded-[23px] overflow-hidden p-12 md:p-20 relative">
                     {/* Abstract grid */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
                     
                     <div className="relative z-10 flex flex-col items-center justify-center">
                         <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-10 shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]">
                             <Rocket className="w-8 h-8 text-white/80" />
                         </div>
                         
                         <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">Ready to vibe code?</h3>
                         <p className="text-white/60 mb-10 max-w-md font-light leading-relaxed">
                             Join thousands of vibe coders building the future. No experience required, just vibes.
                         </p>
                         
                         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                             <Link href="#hero">
                                 <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black hover:bg-slate-200 border-0 text-sm font-medium tracking-wide">
                                     Join Waitlist
                                 </Button>
                             </Link>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl font-extralight mb-12 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-white/10">
                      <AccordionTrigger className="text-white/80 font-light hover:text-white">Do I need to know how to code?</AccordionTrigger>
                      <AccordionContent className="text-white/50 font-light leading-relaxed">
                          Basic HTML/CSS knowledge helps, but it's not strictly required. We teach you how to use AI to write the complex logic. You need to be good at logic and systems thinking, not syntax.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-white/10">
                      <AccordionTrigger className="text-white/80 font-light hover:text-white">How much does it cost?</AccordionTrigger>
                      <AccordionContent className="text-white/50 font-light leading-relaxed">
                          Purrgram is a premium course priced at $80. This gives you lifetime access to the full game map, all future updates, and the community. We do not offer a free tier because we filter for committed builders only.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-white/10">
                      <AccordionTrigger className="text-white/80 font-light hover:text-white">What stack do you teach?</AccordionTrigger>
                      <AccordionContent className="text-white/50 font-light leading-relaxed">
                          We focus on the "Vibe Stack": Next.js 15, Tailwind CSS, Shadcn UI, Supabase, and Cursor AI. It's the fastest way to ship production SaaS today.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-white/10">
                      <AccordionTrigger className="text-white/80 font-light hover:text-white">Do I get lifetime access?</AccordionTrigger>
                      <AccordionContent className="text-white/50 font-light leading-relaxed">
                          Yes! A single payment of $80 unlocks everything forever. No monthly subscriptions, no hidden fees. You also get access to all future worlds we add to the map.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-white/10">
                      <AccordionTrigger className="text-white/80 font-light hover:text-white">What if I get stuck?</AccordionTrigger>
                      <AccordionContent className="text-white/50 font-light leading-relaxed">
                          Every mission has a specialized "Black Box" deep dive if you want to understand the underlying tech. Plus, our Discord community is active 24/7 with other Vibe Coders helping each other debug.
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>
          </div>
      </section>

      {/* Pricing / Join CTA */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-extralight mb-8 tracking-tight">Get Early Access</h2>
              <p className="text-white/60 mb-8 max-w-md mx-auto">We're currently in private beta. Join the waitlist to secure your spot.</p>
              <div className="flex justify-center">
                  <WaitlistForm />
              </div>
          </div>
      </section>
    </div>
  );
}

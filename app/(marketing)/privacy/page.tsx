"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/60 font-light mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-light text-white mb-4">1. Introduction</h2>
              <p>
                Purrgram (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
                <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment processors)</li>
                <li><strong>Course Progress:</strong> Your progress through courses, completed missions, and achievements</li>
                <li><strong>Communication Data:</strong> Messages you send to us through support channels</li>
              </ul>
              <p className="mt-4">
                We also automatically collect certain information when you use our service, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Track your course progress and achievements</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">7. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@purrgram.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">8. Children&apos;s Privacy</h2>
              <p>
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our service, you consent to the transfer of your information to these facilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> privacy@purrgram.com<br />
                <strong>Website:</strong> purrgram.com
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://purrgram.com'),
  title: {
    default: "Purrgram - Vibe Coding Platform | Learn to Build SaaS with AI",
    template: "%s | Purrgram"
  },
  description: "Turn ideas into apps with vibe coding. A gamified coding platform that teaches you to build SaaS with AI, without drowning in docs. Learn the God Mode workflow with Cursor, Claude, and modern tools.",
  keywords: [
    "vibe coding",
    "AI coding",
    "gamified coding",
    "learn to code",
    "SaaS development",
    "Cursor AI",
    "Claude AI",
    "Next.js course",
    "coding tutorial",
    "AI pair programming",
    "founder coding",
    "ship to learn"
  ],
  authors: [{ name: "Purrgram" }],
  creator: "Purrgram",
  publisher: "Purrgram",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Purrgram",
    title: "Purrgram - Vibe Coding Platform | Learn to Build SaaS with AI",
    description: "Turn ideas into apps with vibe coding. A gamified coding platform that teaches you to build SaaS with AI, without drowning in docs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Purrgram - Vibe Coding Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purrgram - Vibe Coding Platform",
    description: "Turn ideas into apps with vibe coding. Learn to build SaaS with AI.",
    images: ["/og-image.png"],
    creator: "@purrgram",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon.ico" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  category: "education",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Purrgram",
    "description": "A gamified coding platform that teaches you to build SaaS with AI",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://purrgram.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://purrgram.com"}/logo.png`,
    "sameAs": [
      "https://twitter.com/purrgram",
      "https://github.com/purrgram"
    ],
    "offers": {
      "@type": "Offer",
      "price": "80",
      "priceCurrency": "USD",
      "description": "Lifetime access to the Vibe Coding Course"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen bg-background text-foreground font-light selection:bg-purple-500/30`}
        suppressHydrationWarning
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

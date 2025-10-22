import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garbhsakhi.com"),
  title: {
    default: "GarbhSakhi – AI-Powered Pregnancy Care for Clinics & Hospitals",
    template: "%s | GarbhSakhi",
  },
  description:
    "GarbhSakhi empowers hospitals and clinics with AI-driven pregnancy tracking, smart alerts, and WhatsApp-based maternal care.",
  keywords: [
    "Pregnancy AI",
    "Maternal Health",
    "GarbhSakhi",
    "Hospital Digital Health",
    "WhatsApp Health Platform",
    "AI Pregnancy Tracker",
    "Digital Maternal Care",
  ],
  alternates: {
    canonical: "https://www.garbhsakhi.com/",
    languages: {
      "en-IN": "https://www.garbhsakhi.in/",
      en: "https://www.garbhsakhi.com/",
    },
  },
  openGraph: {
    title: "GarbhSakhi – AI-Powered Pregnancy Care",
    description:
      "WhatsApp tracking, smart alerts, and a unified dashboard for better maternal care.",
    url: "https://www.garbhsakhi.com/",
    type: "website",
    siteName: "GarbhSakhi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GarbhSakhi AI Pregnancy Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarbhSakhi – AI-Powered Pregnancy Care",
    description:
      "WhatsApp tracking, smart alerts, and a unified dashboard for better maternal care.",
    images: ["/og-image.jpg"],
    creator: "@garbhsakhi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#FADADD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for Google Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GarbhSakhi",
              url: "https://www.garbhsakhi.com",
              logo: "https://www.garbhsakhi.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/garbhsakhi",
                "https://www.instagram.com/garbhsakhi",
              ],
              description:
                "AI-powered pregnancy care platform for hospitals and clinics using WhatsApp-based monitoring and predictive insights.",
            }),
          }}
        />

        {/* ✅ Optional Google Analytics (add when ready) */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        /> 
        */}
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.garbhsakhi.com'),
  title: {
    default: 'GarbhSakhi – AI-Powered Pregnancy Care for Clinics & Hospitals',
    template: '%s | GarbhSakhi',
  },
  description:
    'GarbhSakhi is your AI-powered pregnancy companion for clinics and hospitals—WhatsApp-based tracking, smart alerts, and a unified dashboard for better outcomes.',
  keywords: [
    'Pregnancy AI',
    'Maternal Health',
    'GarbhSakhi',
    'Hospital Digital Health',
    'WhatsApp Health Platform',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': 'https://www.garbhsakhi.in/',
      'en': 'https://www.garbhsakhi.com/',
    },
  },
  openGraph: {
    title: 'GarbhSakhi – AI-Powered Pregnancy Care',
    description:
      'WhatsApp tracking, smart alerts, and a unified dashboard for better maternal care.',
    url: 'https://www.garbhsakhi.com/',
    type: 'website',
    siteName: 'GarbhSakhi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GarbhSakhi – AI-Powered Pregnancy Care',
    description:
      'WhatsApp tracking, smart alerts, and a unified dashboard for better maternal care.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#FADADD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

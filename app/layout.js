import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { faqData } from "../lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NYC TLC License Guide | TLCGuide.org",
  description: "Step-by-step guide to getting your NYC TLC license for taxi, Uber, Lyft, and for-hire vehicle drivers. Includes costs, requirements, FAQs, and application process.",
  metadataBase: new URL('https://tlcguide.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NYC TLC License Guide | TLCGuide.org',
    description: 'Step-by-step guide to getting your NYC TLC license for taxi, Uber, Lyft, and for-hire vehicle drivers. Includes costs, requirements, FAQs, and application process.',
    url: 'https://tlcguide.org',
    siteName: 'TLCGuide',
    images: [
      {
        url: '/tlc_guide_logo.png',
        width: 500,
        height: 500,
        alt: 'TLCGuide Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYC TLC License Guide | TLCGuide.org',
    description: 'Step-by-step guide to getting your NYC TLC license for taxi, Uber, Lyft, and for-hire vehicle drivers. Includes costs, requirements, FAQs, and application process.',
    images: ['/tlc_guide_logo.png'],
    site: '@tlcguide',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    keywords: "NYC TLC license, taxi license, Uber NYC, Lyft NYC, for-hire vehicle, TLC application, TLC requirements, TLC cost, TLC FAQ, TLCGuide",
    author: "TLCGuide Team",
    robots: "index, follow",
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap', // For better performance
})

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

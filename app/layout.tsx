import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://with-you.my.id"), // ganti dengan domain baru jika sudah ada
  alternates: { canonical: "/" },

  title: "With You | Digital Atelier",
  description:
    "With You adalah Digital Atelier untuk membuat kado digital premium, surat interaktif, mixtape, undangan, dan pengalaman digital yang berkesan.",

  openGraph: {
    title: "With You | Digital Atelier",
    description:
      "Kado digital premium, surat interaktif, mixtape, invitation, dan pengalaman digital yang dibuat untuk orang spesial.",
    url: "https://with-you.my.id",
    siteName: "With You",
    images: [
      {
        url: "https://with-you.my.id/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "With You Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "With You | Digital Atelier",
    description:
      "Kado digital premium dan surat interaktif untuk momen yang berkesan.",
    images: ["https://with-you.my.id/assets/og-image.png"],
  },

  icons: {
    icon: [
      { url: "//logo.png" },
      {
        url: "/logo.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },

  manifest: "/assets/favicon/site.webmanifest",

  verification: {
    google: "xioDWch2qaMHQ9tLJDUxKtV1oddFipFpL2IVhOp0PLU",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "with you",
              "url": "",
              "logo": "/logo.png",
              "description": "Digital studios khusus kado digital premium dan surat interaktif.",
              "sameAs": [
                "https://instagram.com/foryoualways.id"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        {/* Google Analytics GA4 — afterInteractive agar tidak blokir LCP */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZSS29T9B71"
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZSS29T9B71');
            `,
          }}
        />
        {/* Microsoft Clarity — loaded after page is interactive, no LCP impact */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xdgwjss71o");`,
          }}
        />
        {/* TikTok Pixel */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D9DTSN3C77U9058HLVA0');
              ttq.page();
            }(window, document, 'ttq');`,
          }}
        />
      </body>
    </html>
  );
}

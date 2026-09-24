import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const title = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description:
    "Explore designer sarees, elegant suits, graceful kurtis, chic Indo-western outfits, and lehengas at TATHVA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Designer sarees, elegant suits, graceful kurtis, Indo-western outfits and lehengas.",
    type: "website",
    siteName: siteConfig.name,
    url: "/",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1080,
        height: 1080,
        alt: "TATHVA - Tradition Meets Trend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Designer sarees, elegant suits, graceful kurtis, Indo-western outfits and lehengas.",
    images: ["/images/logo.jpeg"],
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export const viewport = {
  themeColor: "#F7F3EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://afraj18.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Afraj | Senior Software Engineer",
    template: "%s | Afraj",
  },

  description:
    "Portfolio of Afraj, a Senior Software Engineer building scalable applications, enterprise systems, and modern digital products.",

  applicationName: "Afraj Portfolio",

  keywords: [
    "Afraj",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js",
    "Java",
    "Guidewire",
    "Sri Lanka",
  ],

  authors: [{ name: "Afraj" }],
  creator: "Afraj",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Afraj Portfolio",
    title: "Afraj | Senior Software Engineer",
    description:
      "Building scalable applications, enterprise systems, and meaningful digital products.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afraj — Senior Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Afraj | Senior Software Engineer",
    description:
      "Building scalable applications, enterprise systems, and meaningful digital products.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

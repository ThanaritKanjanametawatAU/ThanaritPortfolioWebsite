import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thanarit Kanjanametawat - AI Research & Development",
  description: "Portfolio showcasing AI research, machine learning projects, and software development expertise",
  keywords: ["Thanarit", "AI Research", "Machine Learning", "Portfolio", "Software Developer"],
  authors: [{ name: "Thanarit Kanjanametawat" }],
  openGraph: {
    title: "Thanarit Kanjanametawat - AI Research & Development",
    description: "Portfolio showcasing AI research, machine learning projects, and software development expertise",
    url: "https://thanarit.vercel.app",
    siteName: "Thanarit Kanjanametawat Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanarit Kanjanametawat - AI Research & Development",
    description: "Portfolio showcasing AI research, machine learning projects, and software development expertise",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

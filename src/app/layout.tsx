import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rumah Murah Tangerang & Serpong Mulai 400 Jutaan | Cicilan 2 Jutaan",
  description: "Perumahan modern di Tangerang dekat Serpong dengan harga mulai 400 jutaan. Cicilan ringan mulai 2 jutaan. Lokasi strategis dekat Jakarta dengan desain premium.",
  keywords: [
    "rumah murah Tangerang",
    "perumahan Tangerang",
    "rumah Serpong",
    "rumah murah Serpong",
    "rumah cicilan 2 jutaan",
    "rumah dekat Jakarta",
    "perumahan modern Serpong",
    "rumah mewah Tangerang"
  ],
  authors: [{ name: "Premium Homes Indonesia" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Rumah Murah Tangerang & Serpong Mulai 400 Jutaan | Cicilan 2 Jutaan",
    description: "Perumahan modern di Tangerang dekat Serpong dengan harga mulai 400 jutaan. Cicilan ringan mulai 2 jutaan.",
    url: "https://chat.z.ai",
    siteName: "Premium Homes Tangerang",
    type: "website",
    images: [
      {
        url: "/images/hero-luxury-house.jpg",
        width: 1344,
        height: 768,
        alt: "Luxury modern homes in Tangerang Serpong"
      }
    ],
    locale: "id_ID"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumah Murah Tangerang & Serpong Mulai 400 Jutaan",
    description: "Perumahan modern di Tangerang dekat Serpong. Cicilan mulai 2 jutaan.",
    images: ["/images/hero-luxury-house.jpg"],
  },
  alternates: {
    canonical: "/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-zinc-950 text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

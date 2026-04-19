import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfume.yasinzarnegar.com"),
  title: "عطریات زرنگار",
  description: "عطریات زرنگار - عطر تنها یک بو نیست، شخصیت نامرئی توست.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "عطریات زرنگار",
    description: "عطر تنها یک بو نیست، شخصیت نامرئی توست.",
    url: "https://perfume.yasinzarnegar.com",
    siteName: "عطریات زرنگار",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/zarnegra-perfume-logo.png",
        width: 1200,
        height: 630,
        alt: "لوگوی عطریات زرنگار",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>{children}</body>
    </html>
  );
}

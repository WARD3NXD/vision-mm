import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { avant } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision",
  description: "The Vision will be next project",
  openGraph: {
    title: "Vision",
    description: "The Vision will be next project",
    url: "https://vision-m.vercel.app/",
    siteName: "Vision",
    images: [
      {
        url: "https://vision-m.vercel.app/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision",
    description: "The Vision will be next project",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className={`${avant.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
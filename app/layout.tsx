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
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import PageTransition from "./components/animations/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zaid Fotaena | Front-End Developer",
  description:
    "Portfolio of Zaid Fotaena, a Front-End Developer focused on building modern, responsive, and user-friendly web interfaces.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <PageTransition>
        <body className="min-h-full flex flex-col">{children}</body>
        </PageTransition>
      <Footer />
    </html>
  );
}

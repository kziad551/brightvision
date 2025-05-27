import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ذا برايت فيجن - The Bright Vision",
  description: "نحول الحلم لعلامة تبقى وتترك أثر - شركة تسويق وإعلان رائدة في قطر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-light`}
        suppressHydrationWarning
      >
        <Navbar />
        {/* Navbar will be added here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

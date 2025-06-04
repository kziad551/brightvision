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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/fav.png', sizes: '32x32', type: 'image/png' },
      { url: '/fav.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/fav.png" />
        <meta name="msapplication-TileImage" content="/fav.png" />
      </head>
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

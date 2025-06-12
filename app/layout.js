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
    icon: '/fav.png?v=5',
    shortcut: '/fav.png?v=5',
    apple: '/fav.png?v=5',
  },
  other: {
    'msapplication-TileColor': '#24135F',
    'msapplication-TileImage': '/fav.png?v=5',
    'theme-color': '#24135F',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/fav.png?v=5" type="image/png" />
        <link rel="shortcut icon" href="/fav.png?v=5" type="image/png" />
        <link rel="apple-touch-icon" href="/fav.png?v=5" />
        <meta name="msapplication-TileColor" content="#24135F" />
        <meta name="msapplication-TileImage" content="/fav.png?v=5" />
        <meta name="theme-color" content="#24135F" />
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

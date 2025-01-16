import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/Footer";

import ContactUs from "./_components/contactUs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Photo Gallery - Andijan State Medical Institute",
  description:
    "Explore our extensive photo gallery showcasing campus life, facilities, and events at Andijan State Medical Institute.",
  keywords:
    "Andijan State Medical Institute, photo gallery, campus, MBBS Uzbekistan, medical education",
  author: "Andijan State Medical Institute",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/gallery" />
        <meta property="og:image" content="/Images/collegeImg.png" />
        <link rel="canonical" href="https://www.example.com/gallery" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main role="main">{children}</main>

        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}

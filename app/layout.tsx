import type { Metadata } from "next";
import { Manrope, Inter, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alan Brown | UI/UX Designer",
  description: "UI-Leaning Digital Product Designer with a focus on Design Systems. Highly experienced in driving the creation of enterprise-scale Design Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${gloriaHallelujah.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

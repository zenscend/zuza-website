import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LogoIntro from "@/components/LogoIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zuza",
  description:
    "Zuza connects independent vendors with the tools, inventory, and infrastructure they need to grow their businesses efficiently.",
  openGraph: {
    title: "Zuza - Empowering Modern Vendors",
    description:
      "Streamline operations, optimize stock management, and open doors to new market opportunities.",
    type: "website",
  },
  icons: {
    icon: "/zuza-logo.svg",
    apple: "/zuza-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LogoIntro />
        {children}
      </body>
    </html>
  );
}

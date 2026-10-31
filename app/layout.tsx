import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const manrope = Manrope({
variable: "--font-manrope",
subsets: ["latin"],
display: "swap",
});

const inter = Inter({
variable: "--font-inter",
subsets: ["latin"],
display: "swap",
});

export const metadata: Metadata = {
title: {
default: "DeepWell Digital Agency | Dig Deeper. Build Better.",
template: "%s | DeepWell Digital Agency",
},
description:
"DeepWell Digital Agency builds thoughtful digital experiences through web development, app development, branding, AI automation, and social media solutions.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
  lang="en"
  suppressHydrationWarning
  className={`${manrope.variable} ${inter.variable}`}
>
  <body className="min-h-screen flex flex-col antialiased">
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  </body>
</html>
);
}

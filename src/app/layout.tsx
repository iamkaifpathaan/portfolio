import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/lib/content";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Md Kaif — Electronics Engineer & Product Builder";
const description =
  "Md Kaif builds the whole thing: PCBs and ESP32 firmware, desktop and web apps, and code-driven motion graphics. Founder of Pabloch Tech, creator of Electronica, L1 QA Engineer at OPPO.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: title, template: "%s — Md Kaif" },
  description,
  keywords: [
    "Md Kaif",
    "iamkaifpathaan",
    "Electronics Engineer",
    "PCB Design",
    "ESP32",
    "Embedded Systems",
    "Full-stack Developer",
    "Pabloch Tech",
    "Electronica",
    "Renewal Tracker",
  ],
  authors: [{ name: "Md Kaif", url: profile.socials.github }],
  creator: "Md Kaif",
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, url: profile.site, siteName: "Md Kaif", type: "website" },
  twitter: { card: "summary_large_image", title, description, creator: "@iamkaifpathaan" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[80] -translate-y-20 rounded-full bg-text px-4 py-2 text-sm text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Navbar />
        <main id="main" className="relative flex-1">
          {children}
        </main>
        <Footer />
        <Cursor />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

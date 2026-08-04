import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://kaifpathaan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md Kaif — Embedded Systems & PCB Design Engineer",
  description:
    "Md Kaif — Electronics & Communication Engineer specializing in ESP32 firmware, KiCad PCB design and IoT product development. Also a video editor, content creator, and prompt engineer.",
  keywords: [
    "Md Kaif",
    "PCB Design",
    "Embedded Systems",
    "ESP32",
    "KiCad",
    "IoT Engineer",
    "Electronics Engineer Portfolio",
    "Firmware Developer",
  ],
  authors: [{ name: "Md Kaif", url: "https://github.com/iamkaifpathaan" }],
  creator: "Md Kaif",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Md Kaif — Embedded Systems & PCB Design Engineer",
    description:
      "Portfolio of Md Kaif — ESP32 firmware, KiCad PCB design, IoT products, and full-stack builds.",
    url: siteUrl,
    siteName: "Md Kaif",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Kaif — Embedded Systems & PCB Design Engineer",
    description:
      "Portfolio of Md Kaif — ESP32 firmware, KiCad PCB design, IoT products, and full-stack builds.",
    creator: "@iamkaifpathaan",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-primary">
        {children}
      </body>
    </html>
  );
}

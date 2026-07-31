import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mojye.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mojye — Grow smarter with your money",
  description:
    "Track spending, ask questions, grow your Savings Tree, and stay ahead of card payments with Mojye: Budget Tracker.",
  keywords: [
    "Mojye",
    "budget tracker",
    "expense tracker",
    "offline budget app",
    "savings tracker",
    "credit card reminder",
    "budget chatbot",
  ],
  openGraph: {
    title: "Mojye — Grow smarter with your money",
    description:
      "A friendlier way to track spending, ask questions, and grow your savings.",
    type: "website",
    siteName: "Mojye",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mojye — Grow smarter with your money",
    description: "A friendlier way to track spending, ask questions, and grow your savings.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

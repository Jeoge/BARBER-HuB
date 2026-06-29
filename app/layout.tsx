import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BARBER HUB｜理容業界のためのプラットフォーム",
  description:
    "BARBER HUB（バーバーハブ）は、理容師・サロン・お客様をつなぐ業界プラットフォームです。One Success. Shared Success.",
  openGraph: {
    title: "BARBER HUB",
    description: "理容業界のためのプラットフォーム。One Success. Shared Success.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f12",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

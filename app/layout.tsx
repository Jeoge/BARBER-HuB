import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BARBER HUB｜理容師のための業界ポータル",
  description:
    "BARBER HUB（バーバーハブ）は、理容師が毎朝開く業界ポータル。AI編集部がニュース・経営ヒント・現場の声を整理して届けます。成功を共有しよう。One Success. Shared Success.",
  openGraph: {
    title: "BARBER HUB",
    description: "理容師のための業界ポータル。成功を共有しよう。",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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

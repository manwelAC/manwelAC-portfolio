import '@hackernoon/pixel-icon-library/fonts/iconfont.css';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel - Portfolio",
  description: "Pixel Art Style Portfolio - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

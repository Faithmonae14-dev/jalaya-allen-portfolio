import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalaya Allen | Systems & Automation Portfolio",
  description: "Client-facing portfolio of workflow design, automation, operational databases, systems implementation, and governance work by Jalaya Allen.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

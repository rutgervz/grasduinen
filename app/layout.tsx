import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The White Rabbit — a record shop that knows your taste",
  description:
    "An AI-native vinyl record shop built on Discogs. Discover by taste, listen before you buy, choose your copy from trusted partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

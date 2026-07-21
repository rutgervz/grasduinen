import type { Metadata, Viewport } from "next";
import Link from "next/link";
import AppNav from "./components/AppNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "The White Rabbit — a record shop that knows your taste",
  description:
    "An AI-native vinyl record shop built on Discogs. Discover by taste, listen before you buy, choose your copy from trusted partners.",
  applicationName: "The White Rabbit",
  appleWebApp: {
    capable: true,
    title: "The White Rabbit",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#14100d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="wrap topbar-inner">
            <Link href="/" className="wordmark">
              The White <span>Rabbit</span>
            </Link>
            <AppNav />
          </div>
        </header>
        <main className="app-main">{children}</main>
        <footer>
          <div className="wrap">
            <p>
              Data provided by{" "}
              <a
                href="https://www.discogs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discogs
              </a>{" "}
              · Not affiliated with Discogs · Independent &amp; open source
              (GPL-3.0)
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

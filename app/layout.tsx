import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { fonts } from "./fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "emailaddress.horse",
    template: "%s - emailaddress.horse",
  },
  description: "Nonsense from John Bannister.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fonts.map((font) => font.variable).join(" ")}`}
    >
      <body>
        <div className="flex flex-col min-h-screen container py-s">
          <header className="-text-1">
            <nav>
              <ul className="cluster gap-xs">
                <li>
                  <Link href="/">emailaddress.horse</Link>
                </li>
                <li>
                  <Link href="/posts">Posts</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="my-xl">{children}</main>

          <footer className="-text-1 mt-auto cluster">
            <p className="mr-auto flex-shrink-0">
              All content &copy; John Bannister 2024
            </p>
            <nav>
              <ul>
                <li>
                  <Link href="https://github.com/jdbann">GitHub</Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>

        <Analytics />
      </body>
    </html>
  );
}

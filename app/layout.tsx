import Link from "next/link";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  axes: ["SOFT", "WONK", "opsz"],
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const ibm_plex_sans = IBM_Plex_Sans({
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-sans",
  weight: ["400"],
});

export const metadata = {
  title: "emailaddress.horse",
  description: "Nonsense from John Bannister",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibm_plex_sans.variable}`}
    >
      <body className="bg-main-2 text-base-11">
        <div className="flex flex-col min-h-screen p-4 space-y-8 max-w-4xl mx-auto">
          <header className="text-sm">
            <nav>
              <ul>
                <li>
                  <Link href="/" className="text-main-11">
                    emailaddress.horse
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-grow prose">{children}</main>

          <footer className="text-sm">
            <nav>
              <ul>
                <li>
                  <Link
                    href="https://github.com/jdbann"
                    className="text-main-11"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}

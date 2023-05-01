import Link from "next/link";
import { Fraunces } from "next/font/google";
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
    <html lang="en" className={`${fraunces.variable}`}>
      <body className="bg-main-2 text-base-11">
        <div className="flex flex-col min-h-screen p-4 space-y-8">
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

          <main className="space-y-4 flex-grow">{children}</main>

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

import Link from "next/link";
import { fonts } from "./fonts";
import "./globals.css";

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
      className={`${fonts.map((font) => font.variable).join(" ")}`}
    >
      <body>
        <div className="flex flex-col min-h-screen container py-s">
          <header className="-text-1">
            <nav>
              <ul>
                <li>
                  <Link href="/">emailaddress.horse</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="my-xl">{children}</main>

          <footer className="-text-1 mt-auto">
            <nav>
              <ul>
                <li>
                  <Link href="https://github.com/jdbann">GitHub</Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}

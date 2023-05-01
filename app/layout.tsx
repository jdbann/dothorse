import Link from "next/link";
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
    <html lang="en">
      <body className="bg-main-2 text-base-11">
        <div className="flex flex-col min-h-screen p-4 space-y-8">
          <header className="text-sm">
            <nav>
              <ul>
                <li>
                  <Link href="/">emailaddress.horse</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="space-y-4 flex-grow">{children}</main>

          <footer className="text-sm">
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

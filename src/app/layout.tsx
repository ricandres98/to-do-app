import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GetItDone",
  description: "A simple to-do app to organize your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

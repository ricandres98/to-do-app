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
      <body className={"bg-gray-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100"}>
        {children}
      </body>
    </html>
  );
}

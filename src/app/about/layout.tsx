import Link from "next/link";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="my-8">
        <Link
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500
          hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-slate-50"
          href="/"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          <span>Home</span>
        </Link>
      </div>
      {children}
    </div>
  );
}

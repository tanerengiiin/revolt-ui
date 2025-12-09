import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto w-full py-12">
        <h1 className="text-3xl md:text-4xl leading-tight ">
          Upgrade the way you build UI in React,
          <br className="md:block hidden" /> with a Smarter Toolkit.
        </h1>
        <div className="flex items-center gap-4 mt-8">
          <Link href="#" className="text-lg font-medium px-6 py-2 rounded-full bg-surface-800 hover:bg-surface-700 dark:bg-surface-50 dark:hover:bg-surface-200 text-surface-50 dark:text-surface-800  transition-colors duration-150">Get Started</Link>
          <Link href="#" className="text-lg font-medium px-6 py-2 rounded-full bg-surface-100 hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700 text-surface-800 dark:text-surface-50 transition-colors duration-150">View Components</Link>
        </div>
      </section>
    </>
  );
}

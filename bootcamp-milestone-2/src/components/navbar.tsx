import React from "react";
import Link from "next/link";
// import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <header className="flex sticky top-0 text-green-800 bg-orange-50 p-4 pb-1 w-full z-10 justify-between items-center text-center">
      <Link href="/" className="hover:text-green-950 text-5xl font-title tracking-tight w-fit">travis biehle</Link>
      <nav className="flex flex-row text-2xl font-sans tracking-normal relative right-3 space-x-5">
        <Link href="/" className="underline underline-offset-4 decoration-transparent hover:decoration-green-950 duration-200 origin-left hover:text-green-950">home</Link>
        <Link href="/blog" className="underline underline-offset-4 decoration-transparent hover:decoration-green-950 duration-200 origin-left hover:text-green-950">blog</Link>
        <Link href="/resume" className="underline underline-offset-4 decoration-transparent hover:decoration-green-950 duration-200 origin-left hover:text-green-950">resume</Link>
        <Link href="/about" className="underline underline-offset-4 decoration-transparent hover:decoration-green-950 duration-200 origin-left hover:text-green-950">contact</Link>
      </nav>
    </header>
  );
}

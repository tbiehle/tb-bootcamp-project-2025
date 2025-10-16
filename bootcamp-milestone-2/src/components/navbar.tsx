import React from "react";
import Link from "next/link";
// import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <header className="flex fixed top-0 text-green-800 p-4 w-full z-10 justify-between items-center text-center">
      <Link href="/" className="hover:text-green-950 text-5xl font-title tracking-tight w-fit">travis biehle</Link>
      <nav className="flex flex-row text-2xl font-sans tracking-normal relative right-3 space-x-5">
        <Link href="/" className="hover:text-green-950 hover:underline hover:underline-offset-4">home</Link>
        <Link href="/blog" className="hover:text-green-950 hover:underline hover:underline-offset-4">blog</Link>
        <Link href="/resume" className="hover:text-green-950 hover:underline hover:underline-offset-4">resume</Link>
        <Link href="/about" className="hover:text-green-950 hover:underline hover:underline-offset-4">contact</Link>
      </nav>
    </header>
  );
}

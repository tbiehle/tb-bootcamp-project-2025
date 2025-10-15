import React from "react";
import Link from "next/link";
// import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <header className="flex sticky text-tiffany-blue p-4 w-full z-10 justify-between items-center text-center">
      <Link href="/" className="hover:text-amber-100 text-5xl font-title tracking-tight ">Travis Biehle</Link>
      <nav className="flex flex-row text-2xl font-sans tracking-normal relative right-3 space-x-5">
        <Link href="/" className="hover:text-amber-100">Home</Link>
        <Link href="/blog" className="hover:text-amber-100">Blog</Link>
        <Link href="/resume" className="hover:text-amber-100">Resume</Link>
        <Link href="/about" className="hover:text-amber-100">Contact Me</Link>
      </nav>
    </header>
  );
}

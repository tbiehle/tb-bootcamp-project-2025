import React from "react";
import Link from "next/link";
// import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <header className="flex sticky text-5xl font-title tracking-tight  bg-theme-succulent p-4 w-full z-10 justify-between items-center text-center">
      <Link href="/">Travis Biehle</Link>
      <nav className="flex flex-row text-2xl font-sans tracking-normal relative right-3 space-x-5">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/about">Contact Me</Link>
      </nav>
    </header>
  );
}

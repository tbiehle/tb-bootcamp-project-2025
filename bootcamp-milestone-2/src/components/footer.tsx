import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bottom-0 w-full pt-4 text-center">
      <Link className="text-3xl" href="/contact">contact me</Link>
      <p className="text-lg">phone: 415-497-3723</p>
      <p className="text-lg">email: travissbiehle@gmail.com</p>
      <p className="text-gray-500 pt-4">© Travis Biehle, 2025. All Rights Reserved.</p>
    </div>
  )
}
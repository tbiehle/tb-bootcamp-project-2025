"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);
    setStatus("idle");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          formRef.current?.reset(); // Clear the form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium ${
            isSending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600 font-medium">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 font-medium">
          Something went wrong. Please try again later.
        </p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate your email service like Mailchimp, ConvertKit, etc.
    console.log("Submitted email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full h-100 mx-auto p-6 bg-white rounded-2xl shadow-md text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-2.jpg')" }}
>
    <div className="max-w-sm ">
      <h2 className="text-3xl text-white font-semibold mb-4 text-gray-900">
        Stay in the loop
      </h2>
      <p className="text-lg text-gray-100 mb-6">
        Get the latest tips, updates, and exclusive offers delivered to your inbox.
      </p>
      {submitted ? (
        <p className="text-green-600 font-medium">
          Thank you! You&apos;ve successfully subscribed.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col  sm:flex-row gap-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="flex w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="mt-3 text-white text-xs">By creating an account using email, I agree to the Terms & Conditions, and acknowledge the Privacy Policy.</p>
      </div>
    </section>
  );
}

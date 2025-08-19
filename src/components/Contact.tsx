"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generic handleChange for all fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_4lc11kc",      // your EmailJS service ID
        "template_3zqm8ul",     // your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "shivamyadavxiimaths@gmail.com", // ensure your template uses this
        },
        "zgH_aKjK58x-ztVZ4"     // your EmailJS public key
      );

      setIsSuccess(true);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
      setStatus("Failed to send message. Try again later.");
    }

    setIsLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white"
    >
      <div className="w-full max-w-xl bg-gradient-to-br from-blue-800/30 to-green-700/10 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur">
        <h2 className="text-3xl font-bold text-blue-400 mb-2 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          I&apos;d love to hear from you. Send me a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <div
            className={`mt-4 text-center text-sm font-medium px-4 py-2 rounded-lg transition duration-300 ${
              isSuccess
                ? "text-green-300 bg-green-800/20"
                : "text-red-300 bg-red-800/20"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </motion.section>
  );
}

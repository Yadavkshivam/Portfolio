"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";



export default function Hero() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hi, I&apos;m{" "}
        <span className="underline underline-offset-8 decoration-blue-500">
          SHIVAM YADAV
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I&apos;m Tech-savvy Computer Science undergraduate passionate about full-stack development
         and real-time applications, 
        turning complex problems into efficient solutions with Data Structures and Algorithms.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
      <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      <Link
        href="#contact"
        className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md hover:from-red-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105"
      >
        Let&apos;s Connect
      </Link>

      
      {isOpen && (
        <div
          className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 animate-fadeIn"
        >
          <a
            href="https://www.linkedin.com/in/shivam-yadav-696a8725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            <FaLinkedin className="text-blue-600 text-lg" />
            LinkedIn
          </a>
          <a
            href="mailto:shivamyadavxiimaths@gmail.com"
            className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            <FaEnvelope className="text-red-500 text-lg" />
            Direct Message
          </a>
          <a
            href="https://github.com/Yadavkshivam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            <FaGithub className="text-black text-lg" />
            GitHub
          </a>
        </div>
      )}
    </div>


        <a
          href="/Shivam_resume.pdf"
          download
          className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md hover:from-red-500 hover:to-pink-500
 text-white transition-all duration-300 hover:scale-90"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
}

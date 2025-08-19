"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm text-gray-400">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
          <p>
            I&apos;m Abhay Kumar, a full-stack web developer and tech enthusiast. I love building modern,
            responsive websites and solving real-world problems through code.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition">→ Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">→ About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">→ Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">→ Contact</a></li>
          </ul>
        </motion.div>

        {/* Follow Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/abhaykk615/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Abhaykk615"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/big_daddy_a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> Jhansi, UP
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> abhaykk615@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" /> +91 89530 14140
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Designed &amp; Built by Abhay Kumar. All rights reserved.
      </div>
    </footer>
  );
}

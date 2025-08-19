"use client";
import { motion } from "framer-motion";
import {  FaGithub, FaInstagram } from "react-icons/fa";
import {  FaCode, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks,SiLinkedin, } from "react-icons/si";

export default function About() {
  return (
    <motion.section
      id="who i am"
      className="py-24 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        About Me
      </h2>

      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex-1">
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            I&#39;m <span className="font-semibold text-blue-400">Shivam Yadav</span>,
             a tech-driven Computer Science undergraduate who loves transforming ideas into interactive, real-time digital experiences.
             Whether it’s building scalable full-stack applications, crafting clean UI designs, or solving tricky Data Structures & Algorithm challenges,
              I thrive on turning complexity into simplicity.
          </p>
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            I&#39;m skilled in building responsive and accessible websites using React, Next.js, MongoDB, Node.js and Tailwind CSS. I&#39;ve created multiple personal projects and participated in internships and tech events that shaped my practical development mindset.
          </p>
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            Outside of coding marathons, you’ll probably find me exploring new tech trends, 
            refining my competitive programming skills, or brainstorming my next project idea.
          </p>

         
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/shivam-yadav-696a8725a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition hover:scale-110"
            >
              <SiLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Yadavkshivam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
             <a
        href="https://www.geeksforgeeks.org/user/shivamyad402p/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-white transition hover:scale-110"
      >
        <SiGeeksforgeeks size={28} />
      </a>

     
      <a
        href="https://leetcode.com/u/yadavShivam007/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 hover:text-white transition hover:scale-110"
      >
        <SiLeetcode size={28} />
      </a>

      
      <a
        href="https://www.codechef.com/users/kind_camel_45"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-white transition hover:scale-110"
      >
        <SiCodechef size={28} />
      </a>

   
      <a
        href="https://www.hackerrank.com/profile/shivamyadav10981"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-white transition hover:scale-110"
      >
        <FaHackerrank size={28} />
      </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

// src/components/TechStack.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { src: "/tech/css3.png", alt: "CSS3" },
  { src: "/tech/nodejs.png", alt: "Node.js" },
  { src: "/tech/react.png", alt: "React" },
  { src: "/tech/materialui.png", alt: "Material UI" },
  { src: "/tech/git.png", alt: "Git" },
  { src: "/tech/angular.png", alt: "Angular" },
  { src: "/tech/java.png", alt: "Java" },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-500 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-black rounded-xl p-4 border border-white/10 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image src={tech.src} alt={tech.alt} width={80} height={80} className="mx-auto" />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-blue-400 mt-2">
              {tech.alt}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

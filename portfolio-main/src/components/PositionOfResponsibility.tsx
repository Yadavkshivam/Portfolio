// src/components/PositionOfResponsibility.tsx
"use client";
import { motion } from "framer-motion";

const responsibilities = [
  {
    title: "Deloitte Virtual Internships",
    description:
      "Completed two virtual internships by Deloitte in Data Analytics and Cybersecurity, gaining exposure to industry-grade tools, data pipelines, and risk mitigation frameworks.",
  },
  {
    title: "Core Coordinator – SCOIT Club",
    description:
      "Core Coordinator of the SCOIT Technical Club, BIET Jhansi — responsible for leading and mentoring club activities and events.",
  },
  {
    title: "DSA & Problem Solving",
    description:
      "Active problem solver with a strong focus on data structures and algorithms; regularly participate in coding contests across platforms like LeetCode, CodeChef, and GFG.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Built and deployed multiple full-stack projects showcasing secure authentication, Firebase integration, and modern UI/UX principles.",
  },
];

export default function PositionOfResponsibility() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-black text-blue-300 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-500 mb-12">Position of Responsibility</h2>
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {responsibilities.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-950 p-6 rounded-xl border border-blue-500/10 shadow-md text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-lg group overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
              <p className="text-blue-200 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: ProjectProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 border hover:scale-[1.03] hover:shadow-lg transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-[#6366f1] mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={github} target="_blank" className="text-indigo-600 underline">GitHub</a>
        {demo && <a href={demo} target="_blank" className="text-indigo-600 underline">Live</a>}
      </div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Development Intern",
    company: "VaultofCodes.in",
    date: "June 2025 – July 2025",
    description:
      "Successfully completed a one-month internship focused on full-stack web development. Built and deployed responsive web apps and was recognized for sincerity, technical skill, and on-time delivery.",
  },
  {
    title: "Virtual Internship Trainee",
    company: "Deloitte (Forage)",
    date: "April 2024 – May 2024",
    description:
      "Completed virtual internships in Cybersecurity and Data Analytics. Practiced handling data pipelines, dashboards, and audit frameworks with business-oriented solutions.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="w-full bg-black text-white py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {experiences.map((exp, index) => (
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
              <h3 className="text-lg font-semibold text-blue-400 mb-1">{exp.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {exp.company} • {exp.date}
              </p>
              <p className="text-sm text-blue-200">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

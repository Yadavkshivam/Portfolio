"use client";
import { motion } from "framer-motion";

const projects = [
    {
    title: "Code-Helper",
    description: "Detects programming language from user code and provides full, runnable solutions with clear explanations,output, and tips to avoid common errors",
    tech: ["HTML", "CSS", "JavaScript","React","REST_API","TailwindCSS","NodeJS"],
    github: "https://github.com/Yadavkshivam/Code-Helper",
  
  },
  {
    title: "Real Time Tracking",
    description: "The project integrates live data feeds and geospatial analysis to provide accurate, up-to-date positioning of tracked entities, enhancing visualization and user-friendly controls. ",
    tech: ["React", "Tailwind","Leaflet","Javascript","EJS"],
    github: "https://github.com/Yadavkshivam/realTimeTracker",
    demo: "https://realtimetracker-8x7r.onrender.com",
  },
  {
    title: "Assign Board ",
    description: "Developed a Web-Based Employee Management System using Node.js, Express.js, My-SQL, and EJS for efficient employee data handling.",
    tech: ["HTML", "CSS", "JavaScript","React","TailwindCss","EJS","LocalStorage"],
    github: "https://github.com/Yadavkshivam/AssignBoard",
    demo: "https://assign-board.vercel.app/",
  },
  {
    title: "Password-Generator",
    description: "Making the random password from the given condition.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Yadavkshivam/Password-Generator",
    demo: "https://password-generator-snowy-three.vercel.app/",
  },
  {
    title: "Climate-Cast",
    description: "Built an interactive web page that fetches users’ real-time climate and weather data based on their location, using APIs and responsive UI design to provide accurate environmental insights.",
    tech: ["HTML", "CSS", "JavaScript","React","REST_API","TailwindCSS"],
    github: "https://github.com/Yadavkshivam/ClimateCast",
    demo: "https://weather-forecast-63d2.vercel.app/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-500 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-950 p-6 rounded-xl border border-blue-500/10 shadow-md text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-lg group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-800 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="text-blue-400 underline">GitHub</a>
                  {project.demo && <a href={project.demo} target="_blank" className="text-green-400 underline">Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&h=900",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
    imageUrl: "https://images.unsplash.com/photo-1547954575-855750c57bd3?q=80&w=1600&h=900",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    liveUrl: "https://ai-image-gen-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-24 px-6 mt-16">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">My <span className="text-primary font-bold">Projects</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A comprehensive look at the digital solutions I've built, ranging from e-commerce platforms to AI interfaces.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

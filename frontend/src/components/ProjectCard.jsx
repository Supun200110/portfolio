import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = project.description.length > 150;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/40 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'; // Fallback to a code image
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <Globe className="text-slate-600" size={48} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.github} 
            className="p-3 bg-white/10 rounded-full text-white hover:bg-primary transition-all backdrop-blur-md border border-white/20"
            target="_blank"
            rel="noopener noreferrer"
            title="View Code"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href={project.link} 
            className="p-3 bg-white/10 rounded-full text-white hover:bg-secondary transition-all backdrop-blur-md border border-white/20"
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-full text-slate-300 hover:text-white transition-all text-xs font-bold backdrop-blur-sm group/btn"
          >
            <FaGithub size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
        
        <div className="mb-6 flex-grow">
          <p className={`text-slate-400 text-sm leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {project.description}
          </p>
          {isLongDescription && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-primary text-xs font-bold hover:underline flex items-center gap-1"
            >
              {isExpanded ? (
                <>Read Less <ChevronUp size={14} /></>
              ) : (
                <>View More... <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-800/80 text-secondary rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

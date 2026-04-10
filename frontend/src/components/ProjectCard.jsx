import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

export default function ProjectCard({ project, index }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-3">
            <a 
              href={project.github} 
              className="p-2 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-white transition-all backdrop-blur-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={18} />
            </a>
            <a 
              href={project.link} 
              className="p-2 bg-secondary/20 rounded-full text-secondary hover:bg-secondary hover:text-white transition-all backdrop-blur-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 flex-grow">
          {project.description}
        </p>

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

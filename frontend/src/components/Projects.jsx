import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <section className="py-24 px-6 relative z-10 font-outfit">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my recent work in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/projects" 
            className="group relative px-8 py-4 bg-slate-900 border border-slate-800 rounded-full text-white font-semibold transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>
    </section>
  );
}

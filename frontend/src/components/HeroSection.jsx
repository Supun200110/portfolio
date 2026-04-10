import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Cpu, Database, Layout, Smartphone, Cloud, Send, GitBranch, Box, Code } from 'lucide-react';
import { SiReact, SiNodedotjs, SiTailwindcss, SiExpress, SiMongodb, SiFlutter, SiPython, SiDart, SiJavascript } from 'react-icons/si';
import myPhoto from '../assets/my.jpg';
import { Link } from 'react-router-dom';
  
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col items-start w-full">
         

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
          >
           Building Smart <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
              Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mb-10"
          >
            I'm Supun Silva, a full-stack developer passionate about building scalable web applications and AI-driven solutions. I focus on clean design, performance, and real-world problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/projects" className="group px-8 py-4 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_rgba(109,40,217,0.4)]">
              <span>View Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-card border border-slate-700 rounded-lg font-medium text-slate-200 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
              <Terminal size={18} />
              <span>Contact Me</span>
            </Link>
          </motion.div>

          {/* Tech Stack section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 flex flex-col items-start gap-4"
          >
            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Core Technologies</p>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: SiReact, name: 'React', color: 'text-[#61DAFB]' },
                { Icon: SiNodedotjs, name: 'Node.js', color: 'text-[#339933]' },
                { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-[#06B6D4]' },
                { Icon: SiExpress, name: 'Express', color: 'text-white' },
                { Icon: SiMongodb, name: 'MongoDB', color: 'text-[#47A248]' },
                { Icon: SiFlutter, name: 'Flutter', color: 'text-[#02569B]' },
                { Icon: SiPython, name: 'Python', color: 'text-[#3776AB]' },
                { Icon: SiDart, name: 'Dart', color: 'text-[#0175C2]' },
                { Icon: SiJavascript, name: 'JavaScript', color: 'text-[#F7DF1E]' },
                { Icon: Cloud, name: 'AWS', color: 'text-[#FF9900]' },
                { Icon: Send, name: 'Postman', color: 'text-[#FF6C37]' },
                { Icon: Box, name: 'Anaconda', color: 'text-[#44A833]' },
                { Icon: Cpu, name: 'Jupyter', color: 'text-[#F37626]' },
                { Icon: Database, name: 'MySQL', color: 'text-[#4479A1]' },
                { Icon: GitBranch, name: 'Git', color: 'text-[#F05032]' },
                { Icon: Box, name: 'TensorFlow', color: 'text-[#FF6F00]' },
                { Icon: Database, name: 'Pandas', color: 'text-[#150458]' },
                { Icon: Smartphone, name: 'Android Studio', color: 'text-[#3DDC84]' },
                { Icon: Code, name: 'VS Code', color: 'text-[#007ACC]' },
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg backdrop-blur-sm group hover:border-slate-500 transition-colors">
                  <tech.Icon className={`text-xl ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-slate-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_50px_rgba(109,40,217,0.3)]">
            <img src={myPhoto} alt="Developer Portrait" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

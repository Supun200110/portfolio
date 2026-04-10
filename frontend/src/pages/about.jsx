import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Heart, Award, Cpu, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiPython,
  SiFlutter,
  SiFirebase
} from 'react-icons/si';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import aboutPhoto from '../assets/abou.jpeg';

const coreTechnologies = [
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 'Database' },
  { name: 'Express', icon: <SiExpress className="text-white" />, level: 'Backend' },
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, level: 'Frontend' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 'Runtime' },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 'Styling' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 'Language' },
  { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" />, level: 'Mobile' },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 'Language' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin size={28} />, link: 'https://www.linkedin.com/in/supun-nishantha-silva-70a231371/' },

  { name: 'GitHub', icon: <FaGithub size={28} />, link: 'https://github.com/Supun200110' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-24 px-6 md:px-12 mt-16 font-outfit">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side: Photo & Quick Info */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-800 border border-white/10 shadow-2xl">
              <img 
                src={aboutPhoto} 
                alt="about" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent backdrop-blur-[2px]">
                <div className="flex justify-center gap-10">
                  {socialLinks.map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -8, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                    >
                      <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shadow-xl">
                        {social.icon}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bio & Skills */}
          <div className="space-y-8">
            <div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
              ></motion.div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Pushing the boundaries of <span className="text-primary italic">digital experiences.</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm an undergraduate Full-Stack Developer and UI Specialist who finds joy at the intersection of powerful code and pixel-perfect design. 
                I focus on building modern, high-performance web applications that aren't just functional, but memorable.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
                <GraduationCap className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">Education</h4>
                  <p className="text-slate-400 text-base leading-relaxed">B.Sc.(hons) in IT | Horizon Campus<br />Rajasinghe Central College</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck size={20} className="text-primary" />
                Core Technologies
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {coreTechnologies.map((tech, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md hover:border-primary/50 hover:bg-slate-800/60 transition-all cursor-default"
                  >
                    <div className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                      {tech.icon}
                    </div>
                    <div className="text-center">
                      <p className="text-white text-[11px] font-bold leading-tight">{tech.name}</p>
                      <p className="text-slate-500 text-[9px] uppercase tracking-tighter mt-0.5">{tech.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-2 text-primary font-medium text-sm p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <Zap size={16} />
                <span>Specialized in building high-performance MERN applications</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
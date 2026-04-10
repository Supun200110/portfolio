import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Heart, Award, Cpu } from 'lucide-react';
import aboutPhoto from '../assets/abou.jpeg';

const skills = [
  { name: 'React / Next.js', level: 95, color: 'from-blue-400 to-cyan-400' },
  { name: 'Node.js / Express', level: 90, color: 'from-green-400 to-emerald-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-600' },
  { name: 'Web Design / UI', level: 88, color: 'from-purple-400 to-pink-500' },
];

const stats = [
  { label: 'Years Experience', value: '4+', icon: <Briefcase size={20} /> },
  { label: 'Projects Completed', value: '50+', icon: <Award size={20} /> },
  { label: 'Happy Clients', value: '30+', icon: <Heart size={20} /> },
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
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
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="flex gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex-1 text-center">
                      <div className="text-secondary mb-1 flex justify-center">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">{stat.label}</div>
                    </div>
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
                I'm a Full-Stack Developer and UI Specialist who finds joy at the intersection of powerful code and pixel-perfect design. 
                With over four years of experience, I help startups and businesses build products that aren't just functional, but memorable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
                <GraduationCap className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Education</h4>
                  <p className="text-slate-400 text-sm">B.S. in Computer Science<br />Tech Institute of Design</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
                <Code2 className="text-primary shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Stack</h4>
                  <p className="text-slate-400 text-sm">MERN / Next.js / AWS / TailwindCSS</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu size={20} className="text-secondary" />
                Technical Mastery
              </h3>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end text-sm">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
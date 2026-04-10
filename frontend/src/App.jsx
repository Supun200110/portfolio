import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './pages/projects.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';

// Home Component representing the landing page
const Home = () => (
  <>
    <HeroSection />
    <Projects />
    <Contact />
  </>
);

function App() {
  const activeLink = "text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:rounded-full";
  const normalLink = "text-slate-300 hover:text-white transition-colors relative";

  return (
    <Router>
      <main className="min-h-screen bg-background font-outfit selection:bg-primary selection:text-white">
        {/* Navigation Layer - Shared across pages */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link to="/" className="font-bold text-2xl tracking-tighter text-white">
                Supun<span className="text-primary"> Silva</span>
              </Link>
              <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
                <a href="https://github.com/Supun200110" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <FaGithub size={26} />
                </a>
                <a href="https://www.linkedin.com/in/supun-nishantha-silva-70a231371/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <FaLinkedin size={26} />
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-10 text-[15px] font-semibold">
              <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : normalLink}>About</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : normalLink}>Contact</NavLink>
              
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-8 py-3 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full text-white font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all transform hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>

            {/* Mobile Menu Icon (Placeholder for now) */}
            <div className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-20"> {/* Add padding top to account for fixed nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>

        {/* Footer - Shared across pages */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 bg-[#0b1120]">
          <p>© {new Date().getFullYear()} Supun Silva. Designed with passion.</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './pages/projects.jsx';

// Home Component representing the landing page
const Home = () => (
  <>
    <HeroSection />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
        {/* Navigation Layer - Shared across pages */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
            <Link to="/" className="font-bold text-xl tracking-tighter text-white">
              JD<span className="text-primary">.dev</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-16"> {/* Add padding top to account for fixed nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>

        {/* Footer - Shared across pages */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 bg-[#0b1120]">
          <p>© {new Date().getFullYear()} John Doe. Designed with passion.</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;


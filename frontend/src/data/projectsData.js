import beauty_clear from '../assets/beauty_clear.png';
import covid_tracker from '../assets/chatbot.png';
import profit from '../assets/Workout.png';
import bmi from '../assets/bmi.png';
import port from '../assets/port.png'
export const projectsData = [
  {
    title: ' Beauty Clear E-Commerce Platform',
    description: 'A comprehensive MERN stack e-commerce solution featuring secure JWT authentication, role-based access control (Admin/User), dynamic product search with regex, and an automated order management system with billing calculation.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
    image: beauty_clear,
    link: '#',
    github: 'https://github.com/Supun200110/cbc-frontend',
    featured: true
  },
  {
    title: 'COVID-19 Tracker & AI Assistant',
    description: 'A professional health intelligence dashboard featuring global real-time data visualization and a LangChain-powered AI assistant for medical context and safety guidance.',
    tech: ['Python', 'Streamlit', 'LangChain', 'OpenAI', 'Pandas'],
    image: covid_tracker,
    link: '#',
    github: 'https://github.com/Supun200110/covid_info_chatbot_and_tracker',
    featured: true
  },
  {
    title: 'ProFit Workout Planner',
    description: 'A high-performance Flutter application designed for fitness enthusiasts to organize their training. It features a rich library of exercises categorized by equipment and target muscle groups, with a modular "Favorites" system and dynamic home dashboard to track daily progress.',
    tech: ['Flutter', 'Dart', 'Material Design', 'Google Fonts', 'Intl', 'JSON Local Data'],
    image: profit,
    link: '#',
    github: 'https://github.com/Supun200110/workout_planner_statefull_flutter',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A high-end personal brand showcase featuring glassmorphism design, smooth Framer Motion animations, and a responsive multi-page architecture. Implemented with a focus on performance, accessibility, and modern UI/UX principles to present a professional career trajectory and project highlights.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Lucide React'],
    image: port,
    link: '#',
    github: '#',
    featured: false
  },
  {
    title: 'BMI Calculator',
    description: 'A Flutter app for calculating Body Mass Index with inputs for gender, height, weight, and age, featuring real-time BMI computation and color-coded health categories.',
    tech: ['Flutter', 'Dart'],
    image: bmi,
    link: '#',
    github: 'https://github.com/Supun200110/bmi_calc',
    featured: false
  },
 
];

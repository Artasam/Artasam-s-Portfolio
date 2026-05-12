import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#09090b] min-h-screen selection:bg-rose-600 selection:text-white">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Experience />
      <Research />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

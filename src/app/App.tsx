import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Hero />
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

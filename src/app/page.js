import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; // Adjust the path if needed
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
      <StickyButton />
    </main>
  );
}

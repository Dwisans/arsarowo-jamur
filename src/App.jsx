import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

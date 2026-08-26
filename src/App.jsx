import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Process = lazy(() => import('./components/Process'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return <div style={{ minHeight: '40vh' }} />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Features />
          <Process />
          <Gallery />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

import React, { lazy, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import MouseTrail from './MouseTrail';

// Lazy loading des sections pour optimiser les performances
const Hero = lazy(() => import('./Hero'));
const About = lazy(() => import('./About'));
const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));
const Projects = lazy(() => import('./Projects'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));

// Loading placeholder minimaliste
const SectionLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 w-64 bg-primary/20 rounded mb-4"></div>
      <div className="h-4 w-48 bg-primary/10 rounded"></div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black">
      <MouseTrail />
      <Header />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Education />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;


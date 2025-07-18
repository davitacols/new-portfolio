import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Resume = lazy(() => import('./components/Resume'));
const CTA = lazy(() => import('./components/CTA'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) return <Loader />;
  
  return (
      <BrowserRouter>
        <ScrollProgress />
        <AnimatedBackground />
        <div className="relative bg-[#0f0f0f]">
          <Navbar />
          
          <div>
            <Hero />
          </div>
          
          <div className="relative z-0">
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Skills />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Stats />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Services />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Experience />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Tech />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Works />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Resume />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <CTA />
            </Suspense>
            
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
  );
};

export default App;
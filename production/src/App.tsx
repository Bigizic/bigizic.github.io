import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';
import About from './pages/About';
import Education from './pages/Education';
import Services from './pages/Services';
import ClientWork from './pages/ClientWork';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Work from './pages/Work';

const AppContent: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const sectionMap: { [key: string]: string } = {
      '/': 'Home',
      '/education': 'Education',
      '/skills': 'Skills',
      '/services': 'Services',
      '/work': 'Work Experience',
      '/client-work': 'Client Work',
      '/contact': 'Contact',
    };
    
    setCurrentSection(sectionMap[location.pathname] || 'Home');
  }, [location]);

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      // Debounce scroll events to prevent flickering
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        // Additional scroll handling if needed
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: 'ease-out-cubic',
      mirror: true,
      anchorPlacement: 'bottom-center'
    });

    AOS.refresh();

  }, []);

  return (
    <div className="bg-primary-dark text-white">
      <Header />
      <main className="relative">
        <About />
        <Education />
        <Skills />
        <Services />
        <Work />
        <ClientWork />
        <Contact />
      </main>
      {isMobile && <ScrollIndicator currentSection={currentSection} />}
    </div>
  );
};

function App() {
  {/*<Router basename={process.env.NODE_ENV === 'production' ? '/bigizic.github.io' : ''}>*/}
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
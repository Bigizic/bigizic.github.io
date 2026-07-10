import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';
import Education from './pages/Education';
import ClientWork from './pages/ClientWork';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Home from './pages/Home';
import { ThemeProvider } from './hooks/useTheme';

const AppContent: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const sectionMap: { [key: string]: string } = {
      '': 'Home',
      '#education': 'Education',
      '#skills': 'Skills',
      '#services': 'Services',
      '#work': 'Work Experience',
      '#client-work': 'Client Work',
      '#contact': 'Contact',
    };

    setCurrentSection(sectionMap[location.hash] || 'Home');
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-primary-dark text-ink min-h-screen">
      <Header />
      <main className="relative pb-8">
        <Home />
        <Work />
        <ClientWork />
        <Skills />
        <Education />
        <Contact />
      </main>
      {isMobile && <ScrollIndicator currentSection={currentSection} />}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

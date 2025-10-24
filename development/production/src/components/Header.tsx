import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Education', path: '#education' },
    { name: 'Skills', path: '#skills' },
    { name: 'Services', path: '#services' },
    { name: 'Work Experience', path: '#work' },
    { name: 'Client Work', path: '#client-work' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        'h-20 bg-primary-dark/1 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className={`transition-all duration-500 ${'flex items-center justify-between w-full'} ${isMobile ? '' : 'pl-10 pr-10'}`}>
          <div>
            <h1 className={`font-bebas font-bold text-white transition-all duration-500 ${
              'text-2xl md:text-3xl pt-4'
            }`}>

            {isMobile ? (
              <Link to="/" className="hover:text-accent transition-colors text-md">
                Isaac Olalekan Ajibola
              </Link>
            )
            :
            (
              <div className="flex justify-center space-x-4 mt-10">
                <Link to="/" className="hover:text-accent transition-colors">
                Isaac Olalekan Ajibola
              </Link>
              <a href="https://www.github.com/bigizic" target='_blank' className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/oliiver" target='_blank' className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:olalekanisaac75@gmail.com" target='_blank' className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <Mail size={16} />
              </a>
            </div>
            )
            }
            </h1>
            {isMobile ? (
              <h2  className="text-xs mt-0 mb-4 text-accent">
                I'm a <span className="typing third-color text-400 border-b-2 border-green-600 pb-1 text-xs">
                  <TypingEffect texts={[" computer programmer", " full Stack Software Engineer", " backend Developer"]} />
                </span>
              </h2>
            )
            :
            (
              <h2  className="text-sm md:text-2md mt-0 mb-4 text-accent">
                I'm a <span className="typing third-color text-400 border-b-2 border-green-600 pb-1 text-sm">
                  <TypingEffect texts={[" computer programmer", " full Stack Software Engineer", " backend Developer"]} />
                </span>
              </h2>
            )
            }
          </div>

          {/* Desktop Navigation */}
          {!isMobile && <nav className={`hidden md:block transition-all duration-500 ${!isMobile ? 'mt-0' : 'mt-8'}`}>
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`text-sm font-medium text-third-color hover:text-accent transition-colors relative ${
                      location.pathname === item.path ? 'text-accent' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      location.pathname === item.path ? 'w-6' : 'w-0 hover:w-6'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>}

          {/* Social Links */}
          {isMobile && (
            <div className="flex justify-center space-x-4 mt-10">
              <a href="https://www.github.com/bigizic" target='_blank' className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/oliiver" target='_blank' className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:olalekanisaac75@gmail.com" target='_blank' className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-md border-2 border-white/12 rounded-lg m-4">
          <nav className="p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block py-3 text-white hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemeMode } from '../hooks/useTheme';

const themeMeta: Record<ThemeMode, { label: string; Icon: typeof Sun }> = {
  system: { label: 'System theme', Icon: Monitor },
  light: { label: 'Light mode', Icon: Sun },
  dark: { label: 'Dark mode', Icon: Moon },
};

const Header: React.FC = () => {
  const location = useLocation();
  const { mode, cycleMode } = useTheme();
  const { Icon, label } = themeMeta[mode];

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Work', path: '#work' },
    { name: 'Projects', path: '#client-work' },
    { name: 'Skills', path: '#skills' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 md:pt-4">
      <div className="mx-auto max-w-6xl rounded-full bg-primary-dark/40 backdrop-blur-md border border-accent/15 shadow-sm px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <h1 className="font-display font-bold text-ink text-base md:text-lg truncate">
            <Link to="/">Isaac Olalekan Ajibola</Link>
          </h1>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.hash === item.path || (!location.hash && item.path === '#')
                      ? 'text-accent'
                      : 'text-muted'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href="https://www.github.com/bigizic"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center text-ink bg-third-color/80"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/oliiver"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center text-ink bg-third-color/80"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:olalekanisaac75@gmail.com"
            className="w-8 h-8 rounded-full flex items-center justify-center text-ink bg-third-color/80"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <button
            type="button"
            onClick={cycleMode}
            className="ml-1 w-8 h-8 rounded-full flex items-center justify-center text-ink bg-third-color/80"
            aria-label={label}
            title={label}
          >
            <Icon size={15} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

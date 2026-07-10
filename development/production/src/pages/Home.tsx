import React from 'react';
import { Mail, Github, Linkedin, ArrowDown, ArrowUpRight, Layers } from 'lucide-react';
import AsciiPortrait from '../components/AsciiPortrait';

const competencies = [
  'Software engineering',
  'Systems & backends',
  'Algorithms',
  'Linux & scripting',
  'Databases',
  'Full-stack delivery',
];

const Home: React.FC = () => {
  return (
    <section className="min-h-[88vh] pt-28 md:pt-32 pb-12">
      <div className="mx-auto px-default max-w-6xl w-full">
        <div className="grid lg:grid-cols-[1fr_240px] gap-4 md:gap-5 items-start">
          <div className="stack-card bg-surface border border-accent/15 rounded-3xl p-6 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-10 items-start">
              <AsciiPortrait className="h-[180px] w-[135px] mx-auto md:mx-0" />

              <div>
                <p className="font-body text-accent text-sm font-semibold tracking-wide mb-2">
                  Full-Stack Software Engineer · Computer Programmer
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
                  Software engineer, computer programmer.
                </h2>
                <p className="font-body text-muted text-[15px] md:text-base max-w-2xl mb-6">
                  Full-stack software engineer and computer programmer delivering production systems
                  across the stack, with a strong foundation in computing fundamentals and algorithms.
                </p>

                <div className="flex flex-wrap gap-3 mb-7 text-sm font-body">
                  <a
                    href="mailto:olalekanisaac75@gmail.com"
                    className="inline-flex items-center gap-2 text-ink bg-third-color px-3 py-1.5 rounded-full"
                  >
                    <Mail size={14} className="text-accent" />
                    olalekanisaac75@gmail.com
                  </a>
                  <a
                    href="https://www.github.com/bigizic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink bg-third-color px-3 py-1.5 rounded-full"
                  >
                    <Github size={14} className="text-accent" />
                    github.com/bigizic
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oliiver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink bg-third-color px-3 py-1.5 rounded-full"
                  >
                    <Linkedin size={14} className="text-accent" />
                    LinkedIn
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {competencies.map((item) => (
                    <span
                      key={item}
                      className="text-xs md:text-sm font-body text-ink border border-accent/20 bg-secondary-color px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 bg-accent text-on-accent font-display font-semibold text-sm px-5 py-2.5 rounded-full"
                >
                  View experience
                  <ArrowDown size={16} />
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://linktree.isaacajibola.com"
            target="_blank"
            rel="noopener noreferrer"
            className="stack-card lg:sticky lg:top-28 order-first lg:order-none bg-surface border border-accent/20 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col gap-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-third-color flex items-center justify-center text-accent">
              <Layers size={18} />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink mb-1">Side projects</p>
              <p className="font-body text-xs text-muted leading-relaxed">
                Live demos and public apps hosted on my subdomains. Open the directory to try them.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-accent mt-auto pt-1">
              linktree.isaacajibola.com
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

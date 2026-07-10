import React from 'react';
import { Briefcase } from 'lucide-react';
import workExperiencesData from '../data/workExperiences.json';

type WorkExperienceRow = {
  company: string;
  role: string;
  period: string;
  link: string;
  details: string[];
  visible?: boolean;
};

const experiences = (workExperiencesData as WorkExperienceRow[]).filter(
  (exp) => exp.visible !== false
);

const WorkCard = ({ exp }: { exp: WorkExperienceRow }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-11 h-11 shrink-0 bg-accent rounded-2xl flex items-center justify-center">
          <Briefcase className="text-on-accent" size={20} />
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-ink leading-snug">{exp.company}</h4>
          <p className="font-body text-sm text-muted mt-0.5">{exp.period}</p>
        </div>
      </div>

      <p className="font-body italic text-accent mb-4 text-sm">{exp.role}</p>

      <ul className="list-disc pl-5 space-y-2 font-body text-sm text-ink flex-1">
        {exp.details?.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const Work: React.FC = () => {
  return (
    <section id="work" className="work py-12 md:py-16">
      <div className="mx-auto px-default max-w-6xl">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
            Work Experience
          </h2>
          <p className="font-body text-muted max-w-2xl text-[15px]">
            Roles spanning backend systems, full-stack product delivery, and production platforms
            across commerce, booking, and internal tools.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => {
            const card = (
              <div
                className="stack-card bg-surface border border-accent/15 rounded-3xl p-6 md:p-8 shadow-sm"
                style={{ zIndex: index + 1 }}
              >
                <WorkCard exp={exp} />
              </div>
            );

            return exp.link ? (
              <a
                key={index}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;

import React from 'react';
import { ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const schools = [
    {
      logo: '/education/alx-no-bg.png',
      org: 'ALX Africa',
      title: 'Diploma, Software Engineering',
      period: 'Jan 2023 – Mar 2024',
      points: [
        'Full-stack web development and computer programming fundamentals',
        'AWS system administration and scalable backend practices',
        'Algorithms, databases, and collaborative software delivery',
      ],
    },
    {
      logo: '/education/fuoye-no-bg.png',
      org: 'Federal University Oye-Ekiti',
      title: 'BSc, Mechatronics Engineering',
      period: '2019 – 2022',
      points: [
        'Computer-aided design (CAD) and systems thinking',
        'Mechanics of materials and metallurgy',
        'Power electronics foundations',
      ],
    },
  ];

  const certs = [
    {
      org: 'Coursera · IBM',
      title: 'Machine Learning with Python',
      period: 'Sep 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/YFK98VC7AC8K',
    },
    {
      org: 'ALX Africa',
      title: 'Backend Engineering Specialization',
      period: 'Oct 2023 – Mar 2024',
      link: 'https://intranet.alxswe.com/certificates/HEL9sPXFJY',
    },
  ];

  return (
    <section id="education" className="education py-12 md:py-16">
      <div className="mx-auto px-default max-w-6xl">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
            Education
          </h2>
          <p className="font-body text-muted max-w-2xl text-[15px]">
            Formal training and credentials in software engineering, backend systems, and
            machine learning.
          </p>
        </div>

        <div className="space-y-6">
          <div className="stack-card bg-surface border border-accent/15 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-ink mb-6">Academic background</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {schools.map((school) => (
                <div
                  key={school.org}
                  className="bg-secondary-color border border-accent/10 rounded-2xl p-5"
                >
                  {school.logo && (
                    <img
                      src={school.logo}
                      alt={school.org}
                      className="mb-4 max-h-12 w-auto object-contain bg-white dark:bg-neutral-200 rounded-lg px-2 py-1"
                    />
                  )}
                  <p className="font-body text-sm font-semibold text-accent mb-1">{school.org}</p>
                  <h4 className="font-display text-base font-bold text-ink mb-2">{school.title}</h4>
                  <p className="font-body text-xs text-muted mb-3 inline-block bg-surface px-3 py-1 rounded-full">
                    {school.period}
                  </p>
                  <ul className="font-body text-sm text-ink space-y-1.5 pl-4 list-disc">
                    {school.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="stack-card bg-surface border border-accent/15 rounded-3xl p-6 md:p-8 shadow-sm"
            style={{ zIndex: 2 }}
          >
            <h3 className="font-display text-xl font-bold text-ink mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certs.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col justify-between bg-secondary-color border border-accent/10 rounded-2xl p-5"
                >
                  <div>
                    <p className="font-body text-sm font-semibold text-accent mb-1">{cert.org}</p>
                    <h4 className="font-display text-base font-bold text-ink mb-2">{cert.title}</h4>
                    <p className="font-body text-xs text-muted mb-4">{cert.period}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-body text-accent font-semibold"
                  >
                    View certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

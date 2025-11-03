import React from 'react';
import { Briefcase } from 'lucide-react';

const Work: React.FC = () => {
  const experiences = [
    {
      company: "Noks Technologies",
      role: "Junior Software Engineer",
      period: "January 2025 - March 2025",
      link: "",
      details: [
        "Built and maintained web apps using C#, ReactJs, JQuery, and SQL.",
        "Wrote efficient SQL queries for data handling.",
        "Developed Restful APIs using C# and the .NET framework.",
      ],
    },
    {
      company: "Noks Technologies",
      role: "Software Engineer",
      period: "One-Day Contract • 21 June 2024, 09:00 AM - 4:30 PM",
      link: "",
      details: [
        "Successfully backed up critical files using Git, ensuring data integrity and version control.",
        "Undertook a .NET project, marking my initial experience with the framework.",
        "Developed and maintained a .NET MVP structure to facilitate synchronization of web files for hosting.",
      ],
    },
    {
      company: "Alx Africa",
      role: "Backend Developer - Intern",
      period: "October 2023 - March 2024",
      link: "https://www.alxafrica.com/",
      details: [
        "Developed and maintained backend systems using Python and JavaScript.",
        "Implemented caching and queuing systems to improve application performance and scalability.",
        "Created unit tests to ensure code quality and reliability.",
        "Collaborated in a team environment to design and deploy software solutions.",
      ],
    },
  ];

  return (
    <section className="py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4">
            My Professional Timeline
            <span className="inline-block w-32 h-px bg-white ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">Work Experience</h1>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-third-color p-8 rounded-lg hover:bg-lynx transition-all duration-300 group"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/80 transition-all duration-300">
                  <Briefcase className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black">
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h4>
                  <p className="text-sm text-gray-700">{exp.period}</p>
                </div>
              </div>

              <p className="italic text-gray-800 mb-4">{exp.role}</p>

              <ul className="list-disc pl-5 space-y-2 text-black">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

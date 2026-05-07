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
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/80 transition-all duration-300">
          <Briefcase className="text-white" size={24} />
        </div>
        <div>
          <h4 className={`text-xl font-bold text-black ${exp.link ? "hover:text-white transition-colors" : ""}`}>
            {exp.company}
          </h4>
          <p className="text-sm text-gray-700">{exp.period}</p>
        </div>
      </div>

      <p className="italic text-gray-800 mb-4">{exp.role}</p>

      <ul className="list-disc pl-5 space-y-2 text-black">
        {exp.details?.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  )
}

const Work: React.FC = () => {
  return (
    <section id="work" className="work py-20 pt-32 md:pt-25">
      <div className=" mx-auto px-default">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4">
            My Professional Timeline
            <span className="inline-block w-32 h-px bg-black ml-4 align-middle"></span>
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
              {exp.link ? (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className='flex h-[100%]'>
                  <WorkCard exp={exp} />
                </a>
              ) :
                (
                  <WorkCard exp={exp} />
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

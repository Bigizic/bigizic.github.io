import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import clientWorksData from '../data/clientWork.json';

const ClientWork: React.FC = () => {
  return (
    <section id="client-work" className="client-work h-100 py-20 pt-32 md:pt-25">
      <div className="mx-auto px-default">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4">
            My Professional Work
            <span className="inline-block w-32 h-px bg-black bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">Client Work</h1>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {clientWorksData.map((work) => (
            <div key={work.id} className="bg-third-color rounded-lg p-8 shadow-2xl" data-aos="zoom-in-up">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-2xl font-bold text-black mb-2">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      {work.title}
                      <ExternalLink size={20} />
                    </a>
                  </h4>
                  <p className="text-lg font-semibold text-accent mb-2">{work.role}</p>
                  <div className="flex items-center gap-4 text-sm text-white">
                    <div className="flex items-center gap-1 flex-wrap">
                      <Calendar size={16} />
                      <span className='text-[10px] lg:text-[12px]'>{work.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-wrap">
                      <MapPin size={16} />
                      <span className='text-[10px] lg:text-[12px]'>{work.location}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2 self-start"
                >
                  Visit Project
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Screenshots Gallery */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-black mb-3">Project Screenshots</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {work.screenshots.map((screenshot, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-lg overflow-hidden border-2 border-accent/20 shadow-lg hover:shadow-xl transition-shadow group"
                      data-aos="zoom-in"
                      data-aos-delay={idx * 100}
                    >
                      <img
                        src={screenshot}
                        alt={`${work.title} screenshot ${idx + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;

/**
 *               
 <div className="mb-6">
 <h5 className="text-lg font-semibold text-black mb-3">Project Overview</h5>
 <p className="text-gray-700 leading-relaxed mb-4">
   {work.overview}
 </p>
</div>

<div className="mb-6">
 <h5 className="text-lg font-semibold text-black mb-3">Key Achievements & Technologies</h5>
 <div className="grid md:grid-cols-2 gap-6">
   {work.achievements.map((achievement, idx) => (
     <div key={idx}>
       <h6 className="font-semibold text-black mb-2">{achievement.title}</h6>
       <ul className="text-gray-700 space-y-1 text-sm">
         {achievement.items.map((item, itemIdx) => (
           <li key={itemIdx} data-aos="fade-right">{item}</li>
         ))}
       </ul>
     </div>
   ))}
 </div>
</div>

{work.features && (
 <div className="mb-6">
   <h5 className="text-lg font-semibold text-black mb-3">Core Features Implemented</h5>
   <div className="grid md:grid-cols-2 gap-6">
     {work.features.map((feature, idx) => (
       <div key={idx}>
         <h6 className="font-semibold text-black mb-2">{feature.title}</h6>
         <ul className="text-gray-700 space-y-1 text-sm">
           {feature.items.map((item, itemIdx) => (
             <li key={itemIdx} data-aos="fade-right">{item}</li>
           ))}
         </ul>
       </div>
     ))}
   </div>
 </div>
)}

{work.userFeatures && (
 <div className="mb-6">
   <h5 className="text-lg font-semibold text-black mb-3">User Experience Features</h5>
   <div className="grid md:grid-cols-2 gap-6">
     {work.userFeatures.map((userFeature, idx) => (
       <div key={idx}>
         <h6 className="font-semibold text-black mb-2">{userFeature.title}</h6>
         <ul className="text-gray-700 space-y-1 text-sm">
           {userFeature.items.map((item, itemIdx) => (
             <li key={itemIdx} data-aos="fade-right">{item}</li>
           ))}
         </ul>
       </div>
     ))}
   </div>
 </div>
)}

<div className="mt-6 p-4 bg-accent/5 rounded-lg">
 <p className="text-sm text-gray-600 italic">
   "{work.quote}"
 </p>
</div>
 */

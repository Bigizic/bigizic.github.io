import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="education h-100 py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-white-400 uppercase tracking-wider mb-4">
            My Journey
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">Education</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-white mb-8">Education</h3>

              <div className="relative border-l-2 border-white/20 pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-yellow-600 rounded-full -left-2 top-0 border-2 border-third-color border-third-color-600"></div>
                <img src='/education/alx-no-bg.png'/>
                <p className="text-white-300 leading-relaxed mb-4">
                  <b>ALX Africa</b>
                </p>
                <h4 className="text-lg font-semibold text-accent uppercase mb-2">
                  Diploma Software Engineering
                </h4>
                <h5 className="text-base bg-white/15 inline-block px-4 py-1 rounded mb-4 font-semibold">
                  Jan 2023 - March 2024
                </h5>
                <ul className="text-white-300 leading-relaxed pl-4">
                  <li>Database Management Systems</li>
                  <li>Algorithms &amp; Optimization for Big Data</li>
                  <li>Discovering the essence of software engineering</li>
                </ul>
              </div>
              
              <div className="relative border-l-2 border-white/20 pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-yellow-600 rounded-full -left-2 top-0 border-2 border-third-color border-third-color-600"></div>
                <img src='/education/fuoye-no-bg.png'/>
                <p className="text-white-300 leading-relaxed mb-4">
                  <b>Federal University Oye-Ekiti</b>
                </p>
                <h4 className="text-lg font-semibold text-accent uppercase mb-2">
                  BSC Mechatronics Engineering
                </h4>
                <h5 className="text-base bg-white/15 inline-block px-4 py-1 rounded mb-4 font-semibold">
                  2019-2022
                </h5>
                <ul className="text-white-300 leading-relaxed pl-4">
                  <li>Computer-Aided Design (CAD)</li>
                  <li>Mechanics of Materials and metallurgy</li>
                  <li>Power Electronics</li>
                </ul>
              </div>
            </div>

            {/* Experience Column */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-white mb-8">Online Certifications</h3>
              
              <div className="relative border-l-2 border-white/20 pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-yellow-600 rounded-full -left-2 top-0 border-2 border-third-color border-third-color-600"></div>
                <p className="text-white-300 leading-relaxed mb-4">
                  <b>Coursera</b>
                </p>
                <h4 className="text-lg font-semibold text-accent uppercase mb-2">
                  IBM Certificate for Machine Learning with Python
                </h4>
                <h5 className="text-base bg-white/15 inline-block px-4 py-1 rounded mb-4 font-semibold">
                  September 2024
                </h5>
                <p className='text-accent'>
                  <a href="https://www.coursera.org/account/accomplishments/verify/YFK98VC7AC8K" target="_blank" title="Certificate">Link to Certificate</a>
                </p>
              </div>

              <div className="relative border-l-2 border-white/20 pl-8">
                <div className="absolute w-4 h-4 bg-yellow-600 rounded-full -left-2 top-0 border-2 border-third-color border-third-color-600"></div>
                <h4 className="text-lg font-semibold text-accent uppercase mb-2">
                  Specialization in backend engineering
                </h4>
                <p className="text-white-300 leading-relaxed mb-4">
                  <b>Alx Africa</b>
                </p>
                <h5 className="text-base bg-white/15 inline-block px-4 py-1 rounded mb-4 font-semibold">
                  Oct 2023 - March 2024
                </h5>
                <p className='text-accent'>
                  <a href="https://intranet.alxswe.com/certificates/HEL9sPXFJY" target="_blank" title="Certificate">Link to Certificate</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
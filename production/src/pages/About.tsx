import React from 'react';
import { Cake, Calendar, MapPin, GraduationCap, Mail, Briefcase } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="about h-100 py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-white-400 uppercase tracking-wider mb-4">
            Learn More About Me
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">About</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-accent mb-6">Full Stack SE & Computer Programmer</h3>
            <p className="text-white-300 mb-6 leading-relaxed">
             I am a disciplined and results oriented software engineer
              with a comprehensive skill set developed through rigorous
              training and practical application.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-white-300 mb-2 flex items-center">
                  <Cake className="text-accent mr-2 w-4 h-4" />
                  <strong>Birthday:</strong>&nbsp;18 June 2001
                </p>
                <p className="text-white-300 mb-2 flex items-center">
                  <Calendar className="text-accent mr-2 w-4 h-4" />
                  <strong>Age:</strong>&nbsp;{new Date().getFullYear() - 2001}
                </p>
                <p className="text-white-300 mb-2 flex items-center">
                  <MapPin className="text-accent mr-2 w-4 h-4" />
                  <strong>City:</strong>&nbsp;Lagos, Nigeria
                </p>
              </div>

              <div>
                <p className="text-white-300 mb-2 flex items-center">
                  <GraduationCap className="text-accent mr-2 w-4 h-4" />
                  <strong>Degree:</strong>&nbsp;Diploma
                </p>
                <p className="text-white-300 mb-2 flex items-center">
                  <Mail className="text-accent mr-2 w-4 h-4" />
                  <strong>Email:</strong>&nbsp;olalekanisaac75@gmail.com
                </p>
                <p className="text-white-300 mb-2 flex items-center">
                  <Briefcase className="text-accent mr-2 w-4 h-4" />
                  <strong>Freelance:</strong>&nbsp;Available
                </p>
              </div>
            </div>

            <p className="text-white-300 leading-relaxed">
              My expertise spans full-stack development, system administration,
              DevOps, and database management, enabling me to design and implement
              scalable, high performance solutions.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
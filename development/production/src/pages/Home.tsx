import React from 'react';
import { Cake, Calendar, MapPin, GraduationCap, Mail, Briefcase, Github } from "lucide-react";
import {
  RiGlobalLine,
  RiDatabase2Line,
  RiServerFill,
  RiCodeBoxFill,
  RiCodeSSlashFill,
  RiBarChartBoxLine,
  RiFileList3Line,
  RiTerminalBoxFill
} from "react-icons/ri";

const Home: React.FC = () => {
  return (
    <section className="h-100 py-20 pt-32 md:pt-25">
      <div className=" mx-auto px-default">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4">
            Learn More About Me
            <span className="inline-block w-32 h-px bg-black bg-white-400 ml-4 align-middle"></span>
          </h2>
        </div>

        <div className="grid gap-12 items-center text-center">
          <div data-aos="fade-right">
          <div className="border-0 h-[180px] w-[140px]  mx-auto rounded-[10px] md:rounded-lg shadow-2xl bg-[url('https://res.cloudinary.com/dduai6ryd/image/upload/isaac.png')] bg-cover bg-top md:bg-center"></div>
            {/*<img
              src="https://res.cloudinary.com/dduai6ryd/image/upload/isaac.png"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />*/}
          </div>

          <div data-aos="fade-left text-center">
            <h3 className="text-[28px] font-bold text-accent mb-6 text-center leading-3">Computer Programmer</h3>
            <p className="text-black-300 mb-6 leading-relaxed text-[14px]">
             Disciplined and results oriented computer programmer
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div>
              <p className="text-black-300 mb-2 flex items-center text-sm">
                  <Mail className="text-accent mr-2 w-4 h-4" />
                  <strong>Email:</strong>&nbsp;<a href="mailto:olalekanisaac75@gmail.com" className="text-accent">olalekanisaac75@gmail.com</a>
                </p>
                <p className="text-black-300 mb-2 flex items-center text-sm">
                  <Github className="text-accent mr-2 w-4 h-4" />
                  <strong>Github:</strong>&nbsp;<a href="https://www.github.com/bigizic" target='_blank' className="text-accent">bigizic</a>
                </p>
                {/*<p className="text-black-300 mb-2 flex items-center">
                  <Cake className="text-accent mr-2 w-4 h-4" />
                  <strong>Birthday:</strong>&nbsp;18 June 2001
                </p>*/}
                {/*<p className="text-black-300 mb-2 flex items-center">
                  <Calendar className="text-accent mr-2 w-4 h-4" />
                  <strong>Age:</strong>&nbsp;{new Date().getFullYear() - 2001}
                </p>*/}
                {/*<p className="text-black-300 mb-2 flex items-center">
                  <MapPin className="text-accent mr-2 w-4 h-4" />
                  <strong>City:</strong>&nbsp;Lagos, Nigeria
                </p>*/}
              </div>

              <div>
                {/*<p className="text-black-300 mb-2 flex items-center">
                  <GraduationCap className="text-accent mr-2 w-4 h-4" />
                  <strong>Degree:</strong>&nbsp;Diploma
                </p>*/}
                {/*<p className="text-black-300 mb-2 flex items-center">
                  <Briefcase className="text-accent mr-2 w-4 h-4" />
                  <strong>Freelance:</strong>&nbsp;Available
                </p>*/}
              </div>
            </div>

            {/*<p className="text-black-300 leading-relaxed">
              My expertise spans full-stack development, system administration,
              DevOps, and database management, enabling me to design and implement
              scalable, high performance solutions.
            </p>*/}
            <div className="interests  mt-12">
              <div className="section-title mb-6">
            <h2 className="text-2xl text-black font-bold mb-4 text-left">Interests</h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="icon-box text-center">
              <RiGlobalLine size={24} color="#ffbb2c" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Web app Development</p>
            </div>
            <div className="icon-box text-center">
              <RiGlobalLine size={24} color="#2954ff" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Cyber Security</p>
            </div>
            <div className="icon-box text-center">
              <RiDatabase2Line size={24} color="#5578ff" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Machine Learning</p>
            </div>
            <div className="icon-box text-center">
              <RiServerFill size={24} color="#e80368" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Web Servers & ization</p>
            </div>
            <div className="icon-box text-center">
              <RiCodeBoxFill size={24} color="#1c7d32" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Software Testing<sub>&nbsp;(Unit tests, Doc tests...)</sub></p>
            </div>
            <div className="icon-box text-center">
              <RiCodeSSlashFill size={24} color="#28a745" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Software Engineering</p>
            </div>
            <div className="icon-box text-center">
              <RiBarChartBoxLine size={24} color="#f1081f" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Ai agents</p>
            </div>
            <div className="icon-box text-center">
              <RiFileList3Line size={24} color="#47aeff" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Algorithms & Data Structures</p>
            </div>
            <div className="icon-box text-center">
              <RiTerminalBoxFill size={24} color="#ffc107" className="mx-auto mb-2" />
              <p className="text-black text-[12px]">Linux, Shell Scripting</p>
            </div>
          </div>
        </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Home;

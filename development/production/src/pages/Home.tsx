import React from 'react';
import { Cake, Calendar, MapPin, GraduationCap, Mail, Briefcase } from "lucide-react";
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
          <div className="h-[420px] md:h-[640px] w-full max-w-md mx-auto rounded-[50%] md:rounded-lg shadow-2xl bg-[url('https://res.cloudinary.com/dduai6ryd/image/upload/isaac.png')] bg-cover bg-top md:bg-center"></div>
            {/*<img
              src="https://res.cloudinary.com/dduai6ryd/image/upload/isaac.png"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />*/}
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

        <div className="interests container mt-12 md:pl-10 md:pr-10">
          <div className="section-title mb-6">
            <h2 className="text-2xl text-white font-bold mb-4">Interests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="icon-box text-center">
              <RiGlobalLine size={36} color="#ffbb2c" className="mx-auto mb-2" />
              <h3 className="text-white">Full Stack Development</h3>
            </div>
            <div className="icon-box text-center">
              <RiGlobalLine size={36} color="#2954ff" className="mx-auto mb-2" />
              <h3 className="text-white">Cyber Security</h3>
            </div>
            <div className="icon-box text-center">
              <RiDatabase2Line size={36} color="#5578ff" className="mx-auto mb-2" />
              <h3 className="text-white">Machine Learning</h3>
            </div>
            <div className="icon-box text-center">
              <RiServerFill size={36} color="#e80368" className="mx-auto mb-2" />
              <h3 className="text-white">Web Servers & Containerization</h3>
            </div>
            <div className="icon-box text-center">
              <RiCodeBoxFill size={36} color="#1c7d32" className="mx-auto mb-2" />
              <h3 className="text-white">Software Testing<sub>&nbsp;(Unit tests, Doc tests...)</sub></h3>
            </div>
            <div className="icon-box text-center">
              <RiCodeSSlashFill size={36} color="#28a745" className="mx-auto mb-2" />
              <h3 className="text-white">Software Engineering</h3>
            </div>
            <div className="icon-box text-center">
              <RiBarChartBoxLine size={36} color="#f1081f" className="mx-auto mb-2" />
              <h3 className="text-white">GPTs</h3>
            </div>
            <div className="icon-box text-center">
              <RiFileList3Line size={36} color="#47aeff" className="mx-auto mb-2" />
              <h3 className="text-white">Algorithms & Data Structures</h3>
            </div>
            <div className="icon-box text-center">
              <RiTerminalBoxFill size={36} color="#ffc107" className="mx-auto mb-2" />
              <h3 className="text-white">Linux, Shell Scripting</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

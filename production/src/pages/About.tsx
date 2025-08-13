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
              src="https://res.cloudinary.com/dduai6ryd/image/upload/isaac.png"
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

    <div className="interests container">
      <div className="section-title">
        <h2>Interests</h2>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="icon-box">
            <i className="ri-global-line" style={{ color: "#ffbb2c" }}></i>
            <h3>Full Stack Development</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-4">
          <div className="icon-box">
            <i className="ri-global-line" style={{ color: "#2954ff" }}></i>
            <h3>Cyber security</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-database-2-line" style={{ color: "#5578ff" }}></i>
            <h3>Machine Learning</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-server-fill" style={{ color: "#e80368" }}></i>
            <h3>Web Servers & Containerization</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mt-4 mt-lg-4">
          <div className="icon-box">
            <i className="ri-code-box-fill" style={{ color: "#1c7d32" }}></i>
            <h3>Software Testing<sub>&nbsp; &nbsp;(Unit tests, Doc tests...)</sub> </h3>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-code-s-slash-fill" style={{ color: "#28a745" }}></i>
            <h3>Software Engineering</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line" style={{ color: "#f1081f" }}></i>
            <h3>GPTs</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-file-list-3-line" style={{ color: "#47aeff" }}></i>
            <h3>Algorithms & Data Structures</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-terminal-box-fill" style={{ color: "#ffc107" }}></i>
            <h3>Linux, Shell Scripting</h3>
          </div>
        </div>
      </div>
    </div>

      </div>
    </section>
  );
};

export default About;
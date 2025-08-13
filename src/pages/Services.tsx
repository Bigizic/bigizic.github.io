import React from 'react';
import { Code, Globe, Smartphone, Database, Zap } from 'lucide-react';
import { Server, Shield, Mail, Cpu, Settings } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Custom Website Solutions",
      description: "Responsive, high-performance websites tailored to your business needs with modern UI/UX practices.",
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern stacks like React, Node.js, Python, and C#.",
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Native and cross platform mobile applications for iOS and Android.',
    },
    {
      icon: <Database size={32} />,
      title: "Database Design & Management",
      description: "Designing, optimizing, and managing relational and NoSQL databases such as MySQL, MongoDB, PostgreSQL, and Redis.",
    },
    {
      icon: <Server size={32} />,
      title: "API Development & Integration",
      description: "Building secure and scalable RESTful APIs with integrations like Paystack, email services, and third-party platforms.",
    },
    {
      icon: <Shield size={32} />,
      title: "System Security & Optimization",
      description: "Implementing caching, queuing, and security best practices to enhance system performance and reliability.",
    },
    {
      icon: <Mail size={32} />,
      title: "Automated Email & Campaign Systems",
      description: "Creating automated systems for marketing, transactional, and campaign emails to engage and retain customers.",
    },
    {
      icon: <Cpu size={32} />,
      title: "DevOps & Deployment",
      description: "Configuring and deploying applications on servers using Nginx, Apache, AWS, Docker, and CI/CD pipelines.",
    },
    {
      icon: <Settings size={32} />,
      title: "Performance Tuning & Scalability",
      description: "Optimizing applications to handle high traffic and scale seamlessly while maintaining speed and reliability.",
    },
  ];

  return (
    <section className="h-100 py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4 pl-10 pr-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-white-400 uppercase tracking-wider mb-4">
            What I Offer
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">Services</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-third-color p-8 rounded-lg text-center hover:bg-lynx transition-all duration-300 group"
              data-aos="zoom-in-up"
            >
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-accent/80">
                <div className="text-black">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h4>
              <p className="text-black leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
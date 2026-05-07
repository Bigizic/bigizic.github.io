import React, { type ReactNode } from 'react';
import { Code, Globe, Smartphone, Database, Server, Shield, Mail, Cpu, Settings } from 'lucide-react';
import servicesData from '../data/services.json';

type ServiceRow = {
  icon: string;
  title: string;
  description: string;
};

const ICON_MAP: Record<string, ReactNode> = {
  Globe: <Globe size={32} />,
  Code: <Code size={32} />,
  Smartphone: <Smartphone size={32} />,
  Database: <Database size={32} />,
  Server: <Server size={32} />,
  Shield: <Shield size={32} />,
  Mail: <Mail size={32} />,
  Cpu: <Cpu size={32} />,
  Settings: <Settings size={32} />,
};

const Services: React.FC = () => {
  const services = (servicesData as ServiceRow[]).map((row) => ({
    ...row,
    icon: ICON_MAP[row.icon] ?? null,
  }));

  return (
    <section id="services" className="services h-100 py-20 pt-32 md:pt-25">
      <div className=" mx-auto px-default">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4">
            What I Offer
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">Services</h1>
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

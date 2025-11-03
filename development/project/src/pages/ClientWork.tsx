import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const ClientWork: React.FC = () => {
  return (
    <section className="client-work h-100 py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4">
            My Professional Work
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">Client Work</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-third-color rounded-lg p-8 shadow-2xl" data-aos="zoom-in-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h4 className="text-2xl font-bold text-black mb-2">
                  <a 
                    href="https://thelinkhangout.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    The Link Hangouts
                    <ExternalLink size={20} />
                  </a>
                </h4>
                <p className="text-lg font-semibold text-accent mb-2">Full Stack Developer</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>June 2024 - July 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Remote Contract</span>
                  </div>
                </div>
              </div>
              <a 
                href="https://thelinkhangout.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/80 text-black px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2 self-start"
              >
                Visit Project
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-black mb-3">Project Overview</h5>
              <p className="text-gray-700 leading-relaxed mb-4">
                Developed a comprehensive event ticketing platform with integrated e-commerce functionality 
                for The Link Hangouts. This full featured web application serves as a complete solution for 
                event management, ticket sales, and merchandise distribution.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-black mb-3">Key Achievements & Technologies</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-black mb-2">Frontend Development</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li data-aos="fade-right">Built responsive React application with Redux for state management</li>
                    <li data-aos="fade-right">Implemented modern UI/UX design principles</li>
                    <li data-aos="fade-right">Created reusable component library</li>
                    <li data-aos="fade-right">Optimized for mobile and desktop experiences</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-black mb-2">Backend & Integration</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li data-aos="fade-right">Developed RESTful APIs using modern frameworks</li>
                    <li data-aos="fade-right">Integrated Paystack payment gateway for secure transactions</li>
                    <li data-aos="fade-right">Implemented robust database architecture</li>
                    <li data-aos="fade-right">Created automated email campaign system</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-black mb-3">Core Features Implemented</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-black mb-2">Event Management</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li data-aos="fade-right">Event creation and management system</li>
                    <li data-aos="fade-right">Ticket booking and reservation system</li>
                    <li data-aos="fade-right">Real-time availability tracking</li>
                    <li data-aos="fade-right">QR code generation for tickets</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-black mb-2">E-commerce Platform</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li data-aos="fade-right">Merchandise shop with product catalog</li>
                    <li data-aos="fade-right">Shopping cart and checkout system</li>
                    <li data-aos="fade-right">Inventory management</li>
                    <li data-aos="fade-right">Order tracking and fulfillment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-black mb-3">User Experience Features</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-black mb-2">Authentication System</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li data-aos="fade-right">Secure user registration and login</li>
                    <li data-aos="fade-right">Password reset functionality</li>
                    <li data-aos="fade-right">Email verification system</li>
                    <li data-aos="fade-right">User profile management</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-black mb-2">Communication System</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li data-aos="fade-right">Automated email campaigns</li>
                    <li data-aos="fade-right">Welcome and confirmation emails</li>
                    <li data-aos="fade-right">Event reminder notifications</li>
                    <li data-aos="fade-right">Order confirmation and updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h5 className="text-lg font-semibold text-black mb-3">Technical Stack</h5>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'Redux', 'TypeScript', 'Node.js', 'Express.js', 
                  'MongoDB', 'Paystack API', 'Email APIs', 'JWT Authentication',
                  'Responsive Design', 'RESTful APIs', 'Git Version Control'
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/5 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                "This project showcases my ability to deliver end-to-end solutions, from initial concept 
                to deployment, while maintaining high code quality and user experience standards."
              </p>
            </div>
          </div>

  <div className="mt-4 bg-third-color rounded-lg p-8 shadow-2xl" data-aos="zoom-in-up">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
      <div className="mb-4 md:mb-0">
        <h4 className="text-2xl font-bold text-black mb-2">
          <a
            href="https://tohannieesskincare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            Tohanniees Skincare
            <ExternalLink size={20} />
          </a>
        </h4>
        <p className="text-lg font-semibold text-accent mb-2">Full-Stack Developer</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>November 2024 – January 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>Remote Contract</span>
          </div>
        </div>
      </div>
      <a
        href="https://tohannieesskincare.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-accent/80 text-black px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2 self-start"
      >
        Visit Project
        <ExternalLink size={16} />
      </a>
    </div>

    <div className="mb-6">
      <h5 className="text-lg font-semibold text-black mb-3">Project Overview</h5>
      <p className="text-gray-700 leading-relaxed mb-4">
        Developed a scalable, secure e-commerce platform for Tohanniees Skincare featuring product categories
        like Glow Oils, Face Creams, and Body Care. The platform includes seamless Paystack-powered payments,
        automated email marketing to over 700 subscribers, and fully integrated content and catalog management.
      </p>
    </div>

    <div className="mb-6">
      <h5 className="text-lg font-semibold text-black mb-3">Key Achievements & Technologies</h5>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h6 className="font-semibold text-black mb-2">Backend Development & Integrations</h6>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li data-aos="fade-right">Secured RESTful APIs built with Express.js and MongoDB</li>
            <li data-aos="fade-right">Paystack integration for seamless, local payment processing</li>
            <li data-aos="fade-right">Email automation system delivering marketing campaigns and transactional notifications</li>
            <li data-aos="fade-right">Performance-optimized API routes with caching strategies</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-black mb-2">Frontend & User Experience</h6>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li data-aos="fade-right">Responsive product browsing UI for skincare categories (kits, oils, creams, soaps)</li>
            <li data-aos="fade-right">Intuitive shopping flow with product filters and dynamic pricing</li>
            <li data-aos="fade-right">Accessible design focused on speed and mobile-first experience</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-300 pt-6">
      <h5 className="text-lg font-semibold text-black mb-3">Technical Stack</h5>
      <div className="flex flex-wrap gap-2">
        {[
          "Express.js",
          "Node.js",
          "MongoDB",
          "Paystack API",
          "Email Automation",
          "Secure APIs",
          "Responsive Design",
          "RESTful Services",
          "Performance Optimization",
        ].map((tech, idx) => (
          <span
            key={idx}
            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6 p-4 bg-accent/5 rounded-lg">
      <p className="text-sm text-gray-600 italic">
        "This project highlights my ability to deliver production-ready web applications—from crafting secure
        backend systems and seamless payment processes to designing engaging user interfaces under tight timelines."
      </p>
    </div>
  </div>

        </div>
      </div>
    </section>
  );
};

export default ClientWork;
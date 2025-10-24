import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

// Client Work Data
const clientWorksData = [
  {
    id: 1,
    title: "Tohanniees Beauty Booking",
    url: "https://beauty.tohannieesskincare.com",
    role: "Full-Stack Developer",
    duration: "Sep 24, 2025 – Oct 7, 2025",
    location: "Remote Contract",
    screenshots: [
      "/client_work/beauty/dsk1.png",
      "/client_work/beauty/dsk2.png",
      "/client_work/beauty/dsk3.png",
      "/client_work/beauty/dsk4.png",
      "/client_work/beauty/dsk5.png",
      "/client_work/beauty/dsk6.png"
    ],
    overview: "Developed an appointment booking system for Tohanniees Skincare customers to schedule beauty and skincare consultations. This platform enables clients to easily book, manage, and track their appointments with real-time availability and automated notifications.",
    achievements: [
      {
        title: "Booking System Development",
        items: [
          "Built intuitive appointment scheduling interface",
          "Implemented real-time availability calendar",
          "Created responsive design for mobile booking",
          "Integrated automated email confirmations and reminders"
        ]
      },
      {
        title: "User Experience & Efficiency",
        items: [
          "Designed streamlined booking flow for quick appointments",
          "Implemented time slot selection with availability checks",
          "Added appointment management and rescheduling features",
          "Created clean, modern UI focused on ease of use"
        ]
      }
    ],
    features: [
      {
        title: "Booking Features",
        items: [
          "Real-time appointment scheduling system",
          "Interactive calendar with available time slots",
          "Appointment confirmation and reminders",
          "Easy rescheduling and cancellation"
        ]
      },
      {
        title: "Customer Features",
        items: [
          "Quick booking with minimal information required",
          "Automated email notifications",
          "Appointment history and upcoming bookings",
          "Service selection for different treatments"
        ]
      }
    ],
    quote: "This rapid 2-week development showcases my ability to deliver focused, efficient booking solutions that enhance customer experience and streamline business operations."
  },
  {
    id: 2,
    title: "The Link Hangouts",
    url: "https://thelinkhangout.com",
    role: "Full Stack Developer",
    duration: "Jun 2025 - Jul 2025",
    location: "Remote Contract",
    screenshots: [
      "/client_work/tlh/dsk1.png",
      "/client_work/tlh/dsk6.png",
      "/client_work/tlh/dsk7.png",
      "/client_work/tlh/dsk11.png"
    ],
    overview: "Developed a comprehensive event ticketing platform with integrated e-commerce functionality for The Link Hangouts. This full featured web application serves as a complete solution for event management, ticket sales, and merchandise distribution.",
    achievements: [
      {
        title: "Frontend Development",
        items: [
          "Built responsive React application with Redux for state management",
        ]
      },
      {
        title: "Backend & Integration",
        items: [
          "Developed RESTful APIs using modern frameworks",
          "Integrated Paystack payment gateway for secure transactions",
          "Created automated email campaign system"
        ]
      }
    ],
    features: [
      {
        title: "Event Management",
        items: [
          "Event creation and management system",
          "Ticket booking and reservation system",
          "Real-time availability tracking",
          "QR code generation for tickets"
        ]
      },
      {
        title: "E-commerce Platform",
        items: [
          "Merchandise shop with product catalog",
          "Shopping cart and checkout system",
          "Inventory management",
          "Order tracking and fulfillment"
        ]
      }
    ],
    userFeatures: [
      {
        title: "Authentication System",
        items: [
          "Secure user registration and login",
          "Password reset functionality",
          "Email verification system",
          "User profile management"
        ]
      },
      {
        title: "Communication System",
        items: [
          "Automated email campaigns",
          "Welcome and confirmation emails",
          "Event reminder notifications",
          "Order confirmation and updates"
        ]
      }
    ],
    quote: "This project showcases my ability to deliver end-to-end solutions, from initial concept to deployment, while maintaining high code quality and user experience standards."
  },
  {
    id: 3,
    title: "Tohanniees Skincare",
    url: "https://tohannieesskincare.com",
    role: "Full-Stack Developer",
    duration: "Nov 2024 – Jan 2025",
    location: "Remote Contract",
    screenshots: [
      "/client_work/skincare/dsk1.png",
      "/client_work/skincare/dsk2.png",
      "/client_work/skincare/dsk3.png",
      "/client_work/skincare/dsk4.png",
    ],
    overview: "Developed a scalable, secure e-commerce platform for Tohanniees Skincare featuring product categories like Glow Oils, Face Creams, and Body Care. The platform includes seamless Paystack-powered payments, automated email marketing to over 700 subscribers, and fully integrated content and catalog management.",
    achievements: [
      {
        title: "Backend Development & Integrations",
        items: [
          "Secured RESTful APIs built with Express.js and MongoDB",
          "local payment processing",
          "Email automation system delivering marketing campaigns and transactional notifications",
          "Performance-optimized API routes with caching strategies"
        ]
      },
      {
        title: "Frontend & User Experience",
        items: [
          "Responsive product browsing UI for skincare categories (kits, oils, creams, soaps)",
          "Intuitive shopping flow with product filters and dynamic pricing",
        ]
      }
    ],
    quote: "This project highlights my ability to deliver production-ready web applications—from crafting secure backend systems and seamless payment processes to designing engaging user interfaces under tight timelines."
  }
];

const ClientWork: React.FC = () => {
  return (
    <section id="client-work" className="client-work h-100 py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 data-aos="fade-right" className="text-sm font-medium text-white-400 uppercase tracking-wider mb-4">
            My Professional Work
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">Client Work</h1>
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
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1 flex-wrap">
                      <Calendar size={16} />
                      <span>{work.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-wrap">
                      <MapPin size={16} />
                      <span>{work.location}</span>
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

              {/* Project Overview */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-black mb-3">Project Overview</h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {work.overview}
                </p>
              </div>

              {/* Key Achievements & Technologies */}
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

              {/* Core Features (if available) */}
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

              {/* User Experience Features (if available) */}
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

              {/* Quote */}
              <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "{work.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
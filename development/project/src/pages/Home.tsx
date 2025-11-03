import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas font-bold text-black mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            I'm a passionate Full Stack Developer creating amazing digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/80 text-black px-8 py-3 rounded-lg font-medium transition-colors">
              View My Work
            </button>
            <button className="border border-accent text-accent hover:bg-accent hover:text-black px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
import React, { useState } from "react";
import { MapPin, Phone, Mail, Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import EmailSender from "../components/SendEmail/SendEmail";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [emailData, setEmailData] = useState<null | typeof formData>(null);
  const [showEmailSender, setShowEmailSender] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailData(formData);
    setShowEmailSender(true);
  };

  return (
    <section className="h-100 py-20 pt-32 md:pt-25">
      <div className="container mx-auto px-4 pl-10 pr-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            data-aos="fade-right"
            className="text-sm font-medium text-black-400 uppercase tracking-wider mb-4"
          >
            Get In Touch
            <span className="inline-block w-32 h-px bg-white bg-white-400 ml-4 align-middle"></span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">
            Contact
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-third-color p-6 rounded-lg" data-aos="fade-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lynx rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Social Profiles
                  </h3>
                </div>
              </div>
              <div className="flex space-x-6 mt-4 ml-16">
                <a
                  href="https://www.github.com/bigizic"
                  target="_blank"
                  className="text-black hover:text-accent transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oliiver"
                  target="_blank"
                  className="text-black hover:text-accent transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com/smallsilverback"
                  target="_blank"
                  className="text-black hover:text-accent transition-colors"
                >
                  <SiX size={18} />
                </a>
              </div>
            </div>

            <div
              className="bg-third-color p-6 rounded-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lynx rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Email</h3>
                </div>
              </div>
              <p className="text-black ml-16">olalekanisaac75@gmail.com</p>
            </div>

            <div
              className="bg-third-color p-6 rounded-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-lynx rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Call</h3>
                </div>
              </div>
              <p className="text-black ml-16">Not available for calls</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 p-8 rounded-lg backdrop-blur-sm"
              data-aos="fade-left"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border-0 rounded text-black placeholder-white/30 focus:bg-white/10 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border-0 rounded text-black placeholder-white/30 focus:bg-white/10 focus:outline-none transition-colors"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border-0 rounded text-black placeholder-white/30 focus:bg-white/10 focus:outline-none transition-colors mb-6"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border-0 rounded text-black placeholder-white/30 focus:bg-white/10 focus:outline-none transition-colors mb-6 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-accent hover:bg-accent/80 text-black px-8 py-3 rounded font-medium transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Email sender trigger */}
            {showEmailSender && emailData && (
              <EmailSender
                name={emailData.name}
                email={emailData.email}
                subject={emailData.subject}
                message={emailData.message}
                setFormData={setFormData}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

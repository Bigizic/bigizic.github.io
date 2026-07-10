import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { SiX } from 'react-icons/si';
import EmailSender from '../components/SendEmail/SendEmail';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
    <section id="contact" className="contact py-12 md:py-16 pb-24">
      <div className="mx-auto px-default max-w-6xl">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">Contact</h2>
          <p className="font-body text-muted max-w-2xl text-[15px]">
            Open to contract and full-time full-stack roles. Reach out for collaborations or
            product builds.
          </p>
        </div>

        <div className="stack-card bg-surface border border-accent/15 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-secondary-color border border-accent/10 rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold text-ink mb-3">Social</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.github.com/bigizic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink border border-accent/10"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oliiver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink border border-accent/10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://x.com/smallsilverback"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink border border-accent/10"
                    aria-label="X"
                  >
                    <SiX size={16} />
                  </a>
                </div>
              </div>

              <div className="bg-secondary-color border border-accent/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-accent/10">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">Email</h3>
                </div>
                <p className="font-body text-sm text-muted break-all">
                  olalekanisaac75@gmail.com
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-color border border-accent/10 rounded-2xl text-ink placeholder:text-muted/70 font-body focus:outline-none focus:border-accent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-color border border-accent/10 rounded-2xl text-ink placeholder:text-muted/70 font-body focus:outline-none focus:border-accent"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-color border border-accent/10 rounded-2xl text-ink placeholder:text-muted/70 font-body focus:outline-none focus:border-accent"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-color border border-accent/10 rounded-2xl text-ink placeholder:text-muted/70 font-body focus:outline-none focus:border-accent resize-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent text-on-accent px-6 py-3 rounded-full font-display font-semibold text-sm"
                >
                  Send message
                </button>
              </form>

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
      </div>
    </section>
  );
};

export default Contact;

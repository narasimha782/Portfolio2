import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { personalInfo } from '../data/portfolioData';

const contactDetails = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: undefined },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: personalInfo.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: personalInfo.linkedin },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio inquiry')}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="./contact"
          title="Let's Work"
          accentWord="Together"
          subtitle="Have an internship, role, or project in mind? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="card p-4 flex items-center gap-3.5 no-underline text-ink"
                >
                  <Icon className="text-accent shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-ink-secondary">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name" required placeholder="Your Name" value={form.name} onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent"
                />
                <input
                  name="email" type="email" required placeholder="Your Email" value={form.email} onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent"
                />
              </div>
              <input
                name="subject" required placeholder="Subject" value={form.subject} onChange={handleChange}
                className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent"
              />
              <textarea
                name="message" required rows={5} placeholder="Message" value={form.message} onChange={handleChange}
                className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent resize-none"
              />
              <button type="submit" className="btn-primary">
                <FiSend size={15} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiAward, FiCpu, FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { experience } from '../data/portfolioData';

const iconMap = { FiCode, FiAward, FiCpu, FiBriefcase };

const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading eyebrow="./experience" title="Work" accentWord="Experience" />

      <div className="space-y-5">
        {experience.map((job, i) => {
          const Icon = iconMap[job.icon] || FiBriefcase;
          return (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card p-6 flex flex-col sm:flex-row gap-5"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-dim text-accent shrink-0">
                <Icon size={19} />
              </span>

              <div className="flex-grow">
                <h3 className="font-display font-semibold text-lg text-ink">{job.role}</h3>
                <p className="text-accent text-sm font-medium mb-2">{job.company}</p>

                <div className="flex flex-wrap gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-ink-secondary">
                    <FiMapPin size={13} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-secondary font-mono">
                    <FiCalendar size={13} /> {job.duration}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-ink-secondary">• {r}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;

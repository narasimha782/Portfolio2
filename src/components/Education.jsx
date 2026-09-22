import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { education } from '../data/portfolioData';

const Education = () => (
  <section id="education" className="py-20 md:py-28 bg-bg-paper">
    <div className="section-container">
      <SectionHeading eyebrow="./education" title="Education" />

      <div className="relative pl-8 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-[13px] sm:before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-border">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-8 sm:-left-10 top-1 grid place-items-center w-7 h-7 rounded-full bg-accent text-white">
              <FiBookOpen size={13} />
            </span>
            <div className="card p-5">
              <p className="font-mono text-xs text-accent mb-1">{edu.duration}</p>
              <h3 className="font-semibold text-ink">{edu.degree}</h3>
              <p className="text-sm text-ink-secondary mb-1.5">{edu.institution}</p>
              <p className="text-sm text-accent font-mono">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;

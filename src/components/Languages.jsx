import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { languages } from '../data/portfolioData';

const Languages = () => (
  <section id="languages" className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading eyebrow="./languages" title="Languages" accentWord="I Speak" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card card-hover p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent-dim text-accent">
                <FiGlobe size={18} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{lang.name}</h3>
                <p className="text-xs text-ink-secondary">{lang.proficiency}</p>
              </div>
            </div>

            <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { certifications } from '../data/portfolioData';

const Certifications = () => (
  <section id="certifications" className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading eyebrow="./certifications" title="Certifications" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card card-hover p-6 text-center flex flex-col items-center gap-3"
          >
            <span className="grid place-items-center w-12 h-12 rounded-full bg-accent-dim text-accent">
              <FiAward size={20} />
            </span>
            <h3 className="text-sm font-semibold text-ink min-h-[40px]">{cert.name}</h3>
            <p className="text-sm text-ink-secondary">{cert.issuer}</p>
            <p className="text-xs text-accent font-mono">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;

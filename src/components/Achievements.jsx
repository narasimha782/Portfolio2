import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiBookOpen } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { achievements } from '../data/portfolioData';

const iconMap = { FiAward, FiTarget, FiBookOpen };

const Achievements = () => (
  <section id="achievements" className="py-20 md:py-28 bg-bg-paper">
    <div className="section-container">
      <SectionHeading eyebrow="./achievements" title="Achievements" />

      <div className="space-y-4 max-w-2xl">
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon] || FiAward;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card card-hover p-5 flex items-center gap-4"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-dim text-accent shrink-0">
                <Icon size={19} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{a.title}</h3>
                <p className="text-sm text-ink-secondary">{a.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Achievements;

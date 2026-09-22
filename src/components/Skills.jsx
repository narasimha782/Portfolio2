import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase } from 'react-icons/fi';
import SectionHeading from './common/SectionHeading';
import { skillCategories } from '../data/portfolioData';

const iconMap = { FiCode, FiLayout, FiServer, FiDatabase };

const Skills = () => (
  <section id="skills" className="py-20 md:py-28">
    <div className="section-container">
      <SectionHeading eyebrow="./skills" title="Skills &" accentWord="Technologies" subtitle="Tools and technologies I use to design, build and ship full-stack and AI-powered applications." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent-dim text-accent">
                  <Icon size={19} />
                </span>
                <h3 className="font-semibold text-sm text-ink">{cat.category}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-ink">{skill.name}</span>
                      <span className="text-xs text-ink-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

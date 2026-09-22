import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, accentWord, subtitle, action }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12"
  >
    <div>
      {eyebrow && (
        <span className="eyebrow mb-3">
          <span className="w-6 h-[2px] bg-gradient-to-r from-accent-soft to-accent rounded-full" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-display font-bold text-3xl md:text-[2.4rem] text-ink">
        {title}{' '}
        <span className="text-accent">{accentWord}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-ink-secondary">{subtitle}</p>
      )}
    </div>

    {action}
  </motion.div>
);

export default SectionHeading;
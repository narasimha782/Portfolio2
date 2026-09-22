import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[3000] flex flex-col items-center justify-center bg-bg"
      >
        <p className="font-mono text-lg text-ink mb-4">
          <span className="text-accent">{'>'}</span> booting_portfolio.exe
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="h-[3px] rounded-full bg-gradient-to-r from-accent to-accent-soft"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default LoadingScreen;

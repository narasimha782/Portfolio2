import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-7 right-7 z-40 grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-soft text-white shadow-glow hover:brightness-110 transition-all"
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;

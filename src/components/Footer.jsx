import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap = { FiGithub, FiLinkedin, FiMail };

const Footer = () => (
  <footer className="border-t border-border py-6">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-ink-secondary">
        © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind.
      </p>

      <div className="flex items-center gap-4">
        {socialLinks.map((s) => {
          const Icon = iconMap[s.icon];
          if (!Icon) return null;
          return (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.name}
              className="text-ink-secondary hover:text-accent transition-colors"
            >
              <Icon size={16} />
            </a>
          );
        })}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="grid place-items-center w-8 h-8 rounded-lg border border-border text-ink-secondary hover:text-accent hover:border-accent transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp size={14} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

import githubIcon from '../assets/github.jpeg';
import linkedinIcon from '../assets/linkdin.jpeg';
import instagramIcon from '../assets/instagram.jpeg';
import gmailIcon from '../assets/Gmail.jpeg';
import narasimha from '../assets/me.jpeg';

import { personalInfo, socialLinks, about } from '../data/portfolioData';

const iconMap = {
  FiGithub: githubIcon,
  FiLinkedin: linkedinIcon,
  FiInstagram: instagramIcon,
  FiMail: gmailIcon,
};

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const Hero = () => (
  <>
    <div className="section-container relative z-10 grid md:grid-cols-2 gap-16 md:gap-8 items-center pt-28 sm:pt-32 md:pt-24">

      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent bg-accent-dim text-accent text-sm font-semibold mb-6">
          Hello, I&apos;m 👋
        </span>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[3.3rem] leading-[1.1] text-ink">
          {personalInfo.firstName}{' '}
          <span className="text-accent">
            {personalInfo.lastName}
          </span>
        </h1>

        <p className="mt-3 text-xl sm:text-2xl text-ink-secondary font-medium">
          {personalInfo.title}
        </p>

        <div className="mt-5 space-y-1 max-w-md">
          {personalInfo.taglineLines.map((line) => (
            <p key={line} className="text-ink-secondary">
              {line}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="btn-outline"
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mt-8">
          {socialLinks.map((s) => {
            const Icon = iconMap[s.icon];

            return (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.name}
                className="grid place-items-center w-11 h-11 rounded-full border border-border overflow-hidden bg-white hover:border-accent hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              >
                {Icon && (
                  <img
                    src={Icon}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Right column: Avatar + Stats */}
      <div className="flex flex-col items-center md:relative md:block">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.9 },
            scale: { duration: 0.8 },
          }}
          className="mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] rounded-full border-2 border-accent overflow-hidden grid place-items-center"
        >
          <img
            src={narasimha}
            alt={personalInfo.name}
            className="w-[99%] h-[99%] object-cover rounded-full"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="
            mt-6 grid grid-cols-2 gap-2.5 w-full max-w-sm
            md:mt-0 md:absolute md:-right-5 md:bottom-2 md:flex md:flex-col md:w-auto md:max-w-none
            z-10
          "
        >
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="md:min-w-[130px] px-4 py-2.5 rounded-2xl border border-border bg-bg-paper/80 backdrop-blur-md shadow-card"
            >
              <p className="text-accent font-display font-bold text-lg leading-tight">
                {stat.value}
                {stat.suffix}
              </p>

              <p className="text-xs text-ink-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll Down */}
    <motion.button
      onClick={() => scrollTo('about')}
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="relative z-10 mx-auto mt-14 grid place-items-center w-10 h-10 rounded-full border border-border text-ink-secondary hover:text-accent hover:border-accent transition-colors"
      aria-label="Scroll to About"
    >
      <FiArrowDown size={16} />
    </motion.button>
  </>
);

export default Hero;
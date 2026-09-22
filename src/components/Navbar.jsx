import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

import { navLinks, personalInfo } from '../data/portfolioData';

// Resume PDF
import resumeFile from '../assets/web-development-resume.pdf';

const scrollToSection = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll effect + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      const total = scrollHeight - clientHeight;

      setProgress(
        total > 0 ? (scrollTop / total) * 100 : 0
      );
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Active navigation section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.to))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Navigation click
  const handleClick = (to) => {
    setOpen(false);
    scrollToSection(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Navbar */}
      <div className="section-container flex items-center justify-between h-16 sm:h-[72px]">

        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick('home');
          }}
          className="flex items-center gap-2.5 font-display font-semibold text-ink"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-accent/15 border border-accent/40 text-accent font-bold">
            {personalInfo.firstName[0]}
          </span>

          <span className="hidden sm:inline">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleClick(link.to)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                active === link.to
                  ? 'text-accent'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop Download CV */}
          <a
            href={resumeFile}
            download="Narasimha-Web-Developer-Resume.pdf"
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm items-center gap-2"
          >
            <FiDownload size={15} />
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-border text-ink"
            aria-label="Open menu"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-soft transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-bg-paper border-l border-border p-5 transition-transform duration-300 ${
            open
              ? 'translate-x-0'
              : 'translate-x-full'
          }`}
        >

          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setOpen(false)}
              className="grid place-items-center w-9 h-9 rounded-lg border border-border text-ink"
              aria-label="Close menu"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleClick(link.to)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm ${
                  active === link.to
                    ? 'text-accent bg-accent/10'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Download CV */}
          <a
            href={resumeFile}
            download="Narasimha-Web-Developer-Resume.pdf"
            className="btn-primary w-full mt-6 text-sm flex items-center justify-center gap-2"
          >
            <FiDownload size={15} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
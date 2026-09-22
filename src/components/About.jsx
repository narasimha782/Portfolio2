import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiUser,
  FiBriefcase,
  FiHeart,
  FiCoffee,
  FiPlay,
  FiVolume2,
  FiVolumeX,
} from 'react-icons/fi';
import { useRef, useState } from 'react';

import SectionHeading from './common/SectionHeading';
import { about, techStack } from '../data/portfolioData';

import htmlImg from '../assets/HTML.jpeg';
import gitImg from '../assets/GIT.jpeg';
import mongoDbImg from '../assets/MongoDB.jpeg';
import fastApiImg from '../assets/FastAPI.jpeg';
import pythonImg from '../assets/Python.jpeg';
import javaImg from '../assets/java.jpeg';
import jsImg from '../assets/JavaScript.jpeg';
import reactImg from '../assets/React.js.jpeg';

import selfIntroSample from '../assets/selfintro.mp4';

const metaIconMap = {
  FiMapPin,
  FiUser,
  FiBriefcase,
  FiHeart,
  FiCoffee,
};

// Maps techStack icon keys to your own images
const techImageMap = {
  SiReact: reactImg,
  SiJavascript: jsImg,
  SiOpenjdk: javaImg,
  SiPython: pythonImg,
  SiFastapi: fastApiImg,
  SiMongodb: mongoDbImg,
  SiGit: gitImg,
  SiHtml5: htmlImg,
};

const About = () => {
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-bg-paper">
      <div className="section-container">
        <SectionHeading eyebrow="./about" title="About" accentWord="Me" />

        {/* ================= ABOUT SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ink-secondary text-[1.05rem] mb-6">
              {about.summary}
            </p>

            {/* Meta Information */}
            <ul className="space-y-3 mb-7">
              {about.meta.map((item) => {
                const Icon = metaIconMap[item.icon];

                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    {Icon && (
                      <Icon
                        className="text-accent shrink-0"
                        size={17}
                      />
                    )}

                    <span className="text-ink-secondary">
                      <span className="font-semibold text-ink">
                        {item.label}:{' '}
                      </span>

                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Know More Button */}
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="btn-outline"
            >
              Know More About Me
            </button>
          </motion.div>

          {/* ================= VIDEO SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Video Container */}
            <div
              className="
                relative
                w-full
                max-w-[360px]
                mx-auto
                aspect-[9/16]
                rounded-2xl
                overflow-hidden
                border
                border-border
                shadow-card
                bg-black
              "
            >

              {/* ================= VIDEO ================= */}
              <video
                ref={videoRef}
                src={selfIntroSample}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  pointer-events-none
                "
              />

              {/* ================= SOUND BUTTON ================= */}
              <button
                onClick={toggleSound}
                type="button"
                aria-label={
                  isMuted
                    ? 'Turn sound on'
                    : 'Turn sound off'
                }
                className="
                  absolute
                  top-5
                  right-5
                  z-10
                  w-11
                  h-11
                  rounded-full
                  bg-black/60
                  backdrop-blur-sm
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  hover:scale-110
                  hover:bg-black/80
                  transition-all
                  duration-300
                "
              >
                {isMuted ? (
                  <FiVolumeX size={20} />
                ) : (
                  <FiVolume2 size={20} />
                )}
              </button>

              {/* ================= VIDEO LABEL ================= */}
              <div
                className="
                  absolute
                  left-4
                  bottom-5
                  z-10
                  px-3
                  py-2
                  rounded-lg
                  bg-black/60
                  backdrop-blur-sm
                  text-white
                "
              >
                <p className="text-sm font-semibold">
                  Self Introduction
                </p>

                <p className="text-xs opacity-80">
                  Watch full video
                </p>
              </div>

              {/* ================= GOOGLE DRIVE BUTTON ================= */}
              <a
                href="https://drive.google.com/drive/folders/16UXlAOcrVbwAdcnLXc95BEA7chJQknQi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch full self introduction video"
                className="
                  absolute
                  right-5
                  bottom-5
                  z-10
                  w-14
                  h-14
                  rounded-full
                  bg-accent
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-glow
                  hover:scale-110
                  hover:bg-accent-soft
                  transition-all
                  duration-300
                "
              >
                <FiPlay size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= TECH STACK ================= */}
        <div className="mt-9 md:mt-16">

          <h3 className="font-display font-semibold text-lg text-ink mb-3">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

            {techStack.map((tech, i) => {
              const image = techImageMap[tech.icon];

              return (
                <motion.div
                  key={tech.name}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: (i % 8) * 0.05,
                  }}
                  className="
                    card
                    card-hover
                    overflow-hidden
                    aspect-[16/9]
                  "
                >
                  {image && (
                    <img
                      src={image}
                      alt={tech.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  )}
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
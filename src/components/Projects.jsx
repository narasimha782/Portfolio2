import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import SectionHeading from './common/SectionHeading';
import { projects } from '../data/portfolioData';

import akshyaThulirImg from '../assets/AkshyaThulir.jpeg';
import pizzaAppImg frgit branch -M mainom '../assets/pizza app.jpeg';
import dermaiImg from '../assets/dermai.gif';

// Map project titles to their imported images
const projectImages = {
  DermAI: dermaiImg,
  PizzaDelight: pizzaAppImg,
  'Akshaya Thulir Startup Dashboard': akshyaThulirImg,
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">

        {/* ================= SECTION HEADING ================= */}
        <SectionHeading
          eyebrow="My Work"
          title="Projects"
          description="Some of the projects I have worked on."
        />

        {/* ================= PROJECTS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, i) => {
            const projectImage =
              projectImages[project.title] || project.image;

            return (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.1,
                }}
                className="card card-hover overflow-hidden flex flex-col"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative overflow-hidden group">

                  <img
                    src={projectImage}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        `https://picsum.photos/seed/${encodeURIComponent(
                          project.title
                        )}/500/300`;
                    }}
                    className="
                      h-44
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Project Tag */}
                  {project.tag && (
                    <span
                      className="
                        absolute
                        top-3
                        right-3
                        rounded-full
                        bg-accent
                        text-white
                        text-xs
                        font-semibold
                        px-3
                        py-1
                      "
                    >
                      {project.tag}
                    </span>
                  )}

                </div>


                {/* ================= CONTENT ================= */}
                <div className="p-6 flex flex-col flex-grow">

                  {/* Project Title */}
                  <h3
                    className="
                      font-display
                      font-semibold
                      text-lg
                      text-ink
                    "
                  >
                    {project.title}
                  </h3>


                  {/* Project Subtitle */}
                  {project.subtitle && (
                    <p
                      className="
                        text-sm
                        text-accent-soft
                        mt-1
                        mb-3
                        font-medium
                      "
                    >
                      {project.subtitle}
                    </p>
                  )}


                  {/* Project Description */}
                  <p
                    className="
                      text-sm
                      text-ink-secondary
                      leading-6
                      mb-4
                    "
                  >
                    {project.description}
                  </p>


                  {/* ================= TECHNOLOGIES ================= */}
                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="chip"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>
                  )}


                  {/* ================= BUTTONS ================= */}
                  <div className="flex gap-3 mt-auto">

                    {/* Live Demo */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          btn-primary
                          flex-1
                          !py-2.5
                          text-sm
                          flex
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    )}


                    {/* GitHub Code */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          btn-outline
                          flex-1
                          !py-2.5
                          text-sm
                          flex
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        <FiGithub size={15} />
                        GitHub Code
                      </a>
                    )}

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;
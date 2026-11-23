
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Ramadan Companion",
    category: "MOBILE APPLICATION",
    description:
      "A personal Ramadan planning companion designed to help users structure their worship, manage daily goals, and track their progress throughout the month.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite"],
    type: "Mobile Product",
    featured: true,
    href: "https://github.com/afraj18/ramazan-companion",
    visual: "ramadan",
  },
  {
    number: "02",
    name: "Lingua-Term",
    category: "LANGUAGE & ACCESSIBILITY",
    description:
      "A multilingual terminology platform designed to make legal, medical, and gender-related terminology accessible in English, Sinhala, and Tamil.",
    technologies: ["Ionic", "Angular", "Firebase", "Firestore"],
    type: "Mobile Application",
    featured: true,
    href: "https://github.com/afraj18/lingua-term-mobile-app",
    visual: "lingua",
  },
  {
    number: "03",
    name: "Kloudac Workflow",
    category: "ENTERPRISE SOFTWARE",
    description:
      "A modular workflow management platform built around a service-oriented backend, asynchronous processing, and scheduled operations.",
    technologies: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "AWS"],
    type: "Enterprise Platform",
    featured: true,
    visual: "kloudac",
  },
  {
    number: "04",
    name: "Arwa Travels",
    category: "TRAVEL & HOSPITALITY",
    description:
      "A digital platform concept for travel services, bringing together a modern interface and a structured online experience.",
    technologies: ["Next.js", "TypeScript"],
    type: "Web Application",
    featured: true,
    href: "https://github.com/afraj18/arwatravels",
    visual: "arwa",
  },
  {
    number: "05",
    name: "University Accommodation Center",
    category: "UNIVERSITY MANAGEMENT",
    description:
      "A university accommodation management system developed to support accommodation-related workflows and administration.",
    technologies: ["Web Development", "Database Systems"],
    type: "Management System",
    href: "https://github.com/afraj18/uwu_accommodation_center",
    visual: "accommodation",
  },
  {
    number: "06",
    name: "Nangalla Undergraduate Society",
    category: "COMMUNITY PLATFORM",
    description:
      "A digital presence for an undergraduate society, designed to communicate its activities, initiatives, and community identity.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    type: "Web Platform",
    href: "https://github.com/afraj18/nangalla-undergraduate-society",
    visual: "nus",
  },
];

const rise = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="projects-section" id="work">
      <div className="projects-container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rise}
          transition={transition}
        >
          <div className="section-eyebrow">
            <span className="section-marker" />
            SELECTED WORK / 2023 — 2026
          </div>

          <div className="section-title-row">
            <h2>
              Things I&apos;ve
              <br />
              <span>built.</span>
            </h2>

            <p className="section-intro">
              A selection of products, platforms, and engineering projects
              across different industries — from enterprise systems to
              user-focused applications.
            </p>
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={rise}
              transition={{
                ...transition,
                delay: reduceMotion ? 0 : (index % 2) * 0.1,
              }}
            >
              <div className={`project-visual visual-${project.visual}`}>
                <div className="project-visual-top">
                  <span>PROJECT / {project.number}</span>
                  <span>{project.type}</span>
                </div>

                <div className="project-visual-center">
                  <span className="visual-index">{project.number}</span>
                  <span className="visual-name">{project.name}</span>
                  <span className="visual-category">{project.category}</span>
                </div>

                <div className="project-visual-bottom">
                  <span>INDEPENDENT ENGINEERING</span>
                  <span>AFRAJ®</span>
                </div>
              </div>

              <div className="project-details">
                <div className="project-title-row">
                  <div>
                    <span className="project-number">{project.number}</span>
                    <h3>{project.name}</h3>
                  </div>

                  {project.href ? (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={17} />
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="project-private">
                      DETAILS ON REQUEST
                    </span>
                  )}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rise}
          transition={transition}
        >
          <span>MORE CODE / OPEN SOURCE</span>

          <a
            href="https://github.com/afraj18"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    category: "BACKEND ENGINEERING",
    skills: ["Java", "Spring Boot", "Node.js", "NestJS", "REST APIs"],
  },
  {
    category: "FRONTEND ENGINEERING",
    skills: ["React", "Next.js", "Angular", "TypeScript", "Redux"],
  },
  {
    category: "DATA & INFRASTRUCTURE",
    skills: ["PostgreSQL", "Redis", "Firebase", "AWS", "Docker"],
  },
  {
    category: "ENTERPRISE PLATFORMS",
    skills: ["Guidewire", "Gosu", "GhostDraft", "Insurance Systems"],
  },
];

const industries = [
  "Insurance",
  "Supply Chain",
  "Healthcare",
  "Travel & Hospitality",
  "Sports",
  "E-commerce",
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <span className="section-marker" />
          A LITTLE ABOUT ME
        </motion.div>

        <div className="about-main">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2>
              Beyond
              <br />
              writing <span>code.</span>
            </h2>

            <div className="about-index">
              <span>02</span> / THE APPROACH
            </div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <p className="about-lead">
              I&apos;m a Senior Software Engineer interested in building
              reliable software, solving complex engineering problems, and
              turning ideas into practical digital products.
            </p>

            <p>
              My experience spans enterprise insurance platforms, backend
              services, workflow automation, and user-facing applications.
              I work across the stack, with a particular interest in backend
              engineering, system architecture, and clean application design.
            </p>

            <p>
              I enjoy understanding the problem behind the requirement,
              choosing the right technical approach, and building solutions
              that are maintainable beyond the initial release.
            </p>

            <a className="about-contact-link" href="#contact">
              Have a project in mind?
              <span>
                Let&apos;s talk <ArrowUpRight size={15} />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="about-industries"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="about-label">INDUSTRY EXPOSURE</div>

          <div className="industry-list">
            {industries.map((industry, index) => (
              <span key={industry}>
                {industry}
                {index !== industries.length - 1 && (
                  <i aria-hidden="true">/</i>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-area"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="skills-heading">
            <div>
              <span className="about-label">TOOLS OF THE TRADE</span>
              <h3>My technical toolkit.</h3>
            </div>
            <span className="skills-count">01 — 04</span>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.category}>
                <span className="skill-group-index">
                  0{index + 1} / {group.category}
                </span>

                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "E&Y GDS",
    role: "Senior Software Engineer",
    period: "SEP 2026 — PRESENT",
    location: "Sri Lanka",
    current: true,
    description:
      "Working on enterprise insurance technology, contributing to application development and document generation solutions across Guidewire platforms.",
    highlights: [
      "Guidewire ClaimCenter and PolicyCenter",
      "Java, Gosu and Spring Boot",
      "GhostDraft document generation and integration",
      "React and Redux",
    ],
  },
  {
    number: "02",
    company: "E&Y GDS",
    role: "Software Engineer",
    period: "APR 2025 — AUG 2026",
    location: "Sri Lanka",
    current: false,
    description:
      "Contributed to enterprise insurance platform development, working on Guidewire configurations, integrations, and application enhancements.",
    highlights: [
      "Guidewire ClaimCenter development",
      "REST API integration and issue resolution",
      "Business rules, batch processes and queues",
      "PCF customization and document generation",
    ],
  },
  {
    number: "03",
    company: "BayLanka",
    role: "Associate / Software Engineer",
    period: "FEB 2024 — APR 2025",
    location: "Sri Lanka",
    current: false,
    description:
      "Worked on application development across business products, contributing to frontend and backend implementation.",
    highlights: [
      "Angular, Ionic and Capacitor",
      "Node.js and PHP REST APIs",
      "COGITO Apps",
      "Venture Card web and mobile application",
    ],
  },
  {
    number: "04",
    company: "Infor GT Nexus",
    role: "Software Engineering Intern",
    period: "MAR 2023 — AUG 2023",
    location: "Sri Lanka",
    current: false,
    description:
      "Gained experience developing enterprise supply chain management software within a collaborative engineering environment.",
    highlights: [
      "Order Collaboration platform",
      "React and AngularJS",
      "Spring Boot and JUnit",
      "Docker, Jenkins and Jira",
    ],
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <span className="section-marker" />
          CAREER / PROFESSIONAL JOURNEY
        </motion.div>

        <div className="experience-heading">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            Where I&apos;ve
            <br />
            <span>worked.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
          >
            My professional journey through software engineering, enterprise
            applications, and product development.
          </motion.p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.company}-${experience.number}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                ...transition,
                delay: reduceMotion ? 0 : 0.06 * index,
              }}
            >
              <div className="experience-meta">
                <span className="experience-number">
                  {experience.number}
                </span>
                <span className="experience-period">
                  {experience.period}
                </span>
              </div>

              <div className="experience-content">
                <div className="experience-title-row">
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="experience-role">{experience.role}</p>
                  </div>

                  {experience.current && (
                    <span className="current-role">
                      <span />
                      CURRENT
                    </span>
                  )}
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>

                <span className="experience-location">
                  {experience.location}
                </span>
              </div>

              <div className="experience-indicator">
                <ArrowUpRight size={17} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="experience-bottom">
          <span>CONTINUOUSLY LEARNING. ALWAYS BUILDING.</span>
          <span>05 CAREER CHAPTERS</span>
        </div>
      </div>
    </section>
  );
}

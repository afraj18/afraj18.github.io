"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.12 }}
          >
            <span className="status-dot" />
            <span>SOFTWARE ENGINEER <i>/</i> SRI LANKA</span>
          </motion.div>

          <motion.p
            className="hero-kicker"
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.28 }}
          >
            Mohamed<br />
            <span>Afraj<span className="lime-period">.</span></span>
          </motion.h1>

          <motion.div
            className="hero-statement"
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.38 }}
          >
            <span className="statement-line" />
            <div>
              <p className="statement-primary">Engineering digital products.</p>
              <p className="statement-secondary">Building systems that scale.</p>
            </div>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.46 }}
          >
            Senior Software Engineer focused on enterprise applications, backend engineering,
            and thoughtful digital experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.54 }}
          >
            <a className="button-primary" href="#work">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="button-secondary" href="/cv/mohamed-afraj-cv.pdf" target="_blank" rel="noreferrer">
              Download CV <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            variants={rise}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.62 }}
          >
            <a href="https://github.com/afraj18" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="https://linkedin.com/in/mohamed-afraj-a935711bb/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="mailto:afraj.2011@gmail.com" aria-label="Email"><ArrowUpRight size={17} /></a>
            <span className="social-caption">CONNECT WITH ME</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...transition, delay: 0.3 }}
        >
          <div className="portrait-backdrop" />
          <div className="portrait-frame">
            <Image
              src="/images/afraj-profile.png"
              alt="Mohamed Afraj wearing a dark suit and blue tie"
              fill
              priority
              sizes="(max-width: 760px) 78vw, 43vw"
              className="portrait-image"
            />
            <div className="portrait-shade" />
          </div>
          <div className="portrait-index"><span>01</span> / THE ENGINEER</div>
          <div className="portrait-note">
            <span className="note-mark">✳</span>
            <span>Curious by nature.<br />Engineer by craft.</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </motion.div>
      </div>

      <div className="hero-footer">
        <span>JAVA <b>·</b> TYPESCRIPT <b>·</b> SYSTEMS</span>
        <a href="#work">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        <span className="hero-location">COLOMBO, LK <i>06°55&apos;N 79°51&apos;E</i></span>
      </div>
    </section>
  );
}

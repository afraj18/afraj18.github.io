
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <span className="section-marker" />
          HAVE SOMETHING IN MIND?
        </motion.div>

        <motion.div
          className="contact-main"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="contact-heading">
            <span className="contact-index">06 / GET IN TOUCH</span>

            <h2>
              Let's build
              <br />
              something <span>meaningful.</span>
            </h2>
          </div>

          <div className="contact-action">
            <p>
              Have a project, an interesting engineering challenge, or an
              opportunity worth discussing? Send me a message.
            </p>

            <a
              className="contact-email-button"
              href="mailto:afraj.2011@gmail.com?subject=Let's%20Connect"
            >
              <span>Start a conversation</span>
              <ArrowUpRight size={19} />
            </a>

            <span className="contact-email-address">
              afraj.2011@gmail.com
            </span>
          </div>
        </motion.div>

        <div className="contact-bottom">
          <span className="contact-bottom-label">FIND ME ELSEWHERE</span>

          <div className="contact-social-links">
            <a
              href="https://github.com/afraj18"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://linkedin.com/in/mohamed-afraj-a935711bb/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            <a href="mailto:afraj.2011@gmail.com">
              <Mail size={16} />
              Email
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

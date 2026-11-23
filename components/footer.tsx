
import { ArrowUpRight, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/afraj18" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-afraj-a935711bb/",
  },
  { label: "Email", href: "mailto:afraj.2011@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#top" className="footer-wordmark">
            AFRAJ<span>®</span>
          </a>

          <span className="footer-description">
            ENGINEERING DIGITAL PRODUCTS.
            <br />
            BUILDING SYSTEMS THAT SCALE.
          </span>

          <a className="back-to-top" href="#top">
            BACK TO TOP <ArrowUp size={14} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} MOHAMED AFRAJ. ALL RIGHTS RESERVED.
          </span>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:") ? undefined : "noreferrer"
                }
              >
                {link.label}
                <ArrowUpRight size={11} />
              </a>
            ))}
          </div>

          <span className="footer-location">MADE IN SRI LANKA</span>
        </div>
      </div>
    </footer>
  );
}

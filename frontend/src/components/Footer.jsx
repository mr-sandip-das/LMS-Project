import { Link } from "react-router-dom";
import "../assets/style/components/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__wrap site-footer__grid">
        {/* Brand + social */}
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <svg width="38" height="38" viewBox="0 0 28 28" aria-hidden="true">
              <rect width="28" height="28" rx="8" fill="var(--color-accent)" />
              <path d="M6 11l8-4 8 4-8 4-8-4z" fill="var(--color-primary-dark)" />
              <path d="M10 14v4c0 1.5 2 2.5 4 2.5s4-1 4-2.5v-4l-4 2-4-2z" fill="var(--color-primary-dark)" />
            </svg>
            <span>LearnLoop</span>
          </Link>

          <p>
            Simple and affordable online learning. Watch lessons, practice with
            projects and earn certificates at your own pace.
          </p>

          <div className="site-footer__social">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h4 className="site-footer__title">Quick links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/course">Course</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        {/* Categories */}
        <nav aria-label="Categories">
          <h4 className="site-footer__title">Categories</h4>
          <Link to="/course">Web Development</Link>
          <Link to="/course">Data Science</Link>
          <Link to="/course">UI / UX Design</Link>
          <Link to="/course">Business</Link>
          <Link to="/course">Languages</Link>
        </nav>

        {/* Newsletter + contact */}
        <div className="site-footer__news">
          <h4 className="site-footer__title">Stay in the loop</h4>
          <p>Get new course alerts and learning tips in your inbox. No spam.</p>

          {/* Plain form: connect the action to your backend later */}
          <form className="site-footer__form" action="#">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          <ul className="site-footer__contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
              <span>support@learnloop.com</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-footer__bottom">
        <div className="site-footer__wrap site-footer__bottom-inner">
          <p>© 2026 LearnLoop. All rights reserved.</p>
          <div className="site-footer__legal">
            <Link to="/contact">Help</Link>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Use</Link>
            <a href="#" className="site-footer__top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
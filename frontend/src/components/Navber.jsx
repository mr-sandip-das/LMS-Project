import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/style/components/Navber.css";

export default function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Main">
        {/* Logo */}
        <Link to="/" className="nav__logo" onClick={closeAll}>
          <svg width="34" height="34" viewBox="0 0 28 28" aria-hidden="true">
            <rect width="28" height="28" rx="8" fill="var(--color-primary)" />
            <path d="M6 11l8-4 8 4-8 4-8-4z" fill="var(--color-accent)" />
            <path d="M10 14v4c0 1.5 2 2.5 4 2.5s4-1 4-2.5v-4l-4 2-4-2z" fill="#fff" />
          </svg>
          <span>LearnLoop</span>
        </Link>

        {/* Links + Search (desktop row / mobile drawer) */}
        <div className={`nav__menu ${menuOpen ? "is-open" : ""}`}>
          <ul className="nav__links">
            <li>
              <NavLink to="/" end onClick={closeAll}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeAll}>About us</NavLink>
            </li>
            <li>
              <NavLink to="/course" onClick={closeAll}>Course</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeAll}>Contact us</NavLink>
            </li>
          </ul>

          {/* Plain HTML form: goes to /course?search=your-text, no JavaScript needed */}
          <form className="nav__search" role="search" action="/course" method="get">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              name="search"
              placeholder="Search courses..."
              aria-label="Search courses"
            />
          </form>
        </div>

        {/* Profile + hamburger */}
        <div className="nav__actions">
          <div className="nav__profile">
            <button
              type="button"
              className="nav__profile-btn"
              aria-haspopup="true"
              aria-expanded={profileOpen}
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <span className="nav__avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              </span>
              <span className="nav__profile-text">Profile</span>
              <svg className="nav__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {profileOpen && (
              <div className="nav__dropdown" role="menu">
                <p className="nav__dropdown-title">Welcome to LearnLoop</p>
                <p className="nav__dropdown-sub">Log in to continue your courses.</p>
                <Link to="/login" className="btn btn--solid" role="menuitem" onClick={closeAll}>
                  Login
                </Link>
                <Link to="/register" className="btn btn--ghost" role="menuitem" onClick={closeAll}>
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            type="button"
            className={`nav__burger ${menuOpen ? "is-active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
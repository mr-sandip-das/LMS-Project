import { Link } from "react-router-dom";
import Navber from "../components/Navber.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/style/pages/AboutUs.css";

function AboutUs() {
  return (
    <div>
      <Navber />

      {/* ================= HERO ================= */}
      <section className="ab-hero">
        <div className="ab-wrap ab-hero__inner">
          <p className="ab-crumb">
            <Link to="/">Home</Link> / About us
          </p>
          <h1>We make learning simple, affordable and open to everyone</h1>
          <p className="ab-hero__text">
            LearnLoop is an online learning platform built for students who want
            real skills without the high cost. Learn at your own pace, from
            teachers who work in the field.
          </p>
          <div className="ab-hero__buttons">
            <Link to="/course" className="ab-btn ab-btn--solid">Browse courses</Link>
            <Link to="/contact" className="ab-btn ab-btn--outline">Contact us</Link>
          </div>
        </div>
      </section>

      {/* ================= STORY + STATS ================= */}
      <section className="ab-section">
        <div className="ab-wrap ab-story">
          <div>
            <h2>Our story</h2>
            <p>
              We started LearnLoop because good courses were either too expensive
              or too hard to follow. Students were watching long videos with no
              practice, no feedback and no way to prove what they learned.
            </p>
            <p>
              So we built a place where every lesson is short and clear, every
              module ends with a quiz, and every course ends with a project and a
              certificate you can show to employers.
            </p>
            <Link to="/course" className="ab-link">See what you can learn</Link>
          </div>

          <div className="ab-stats">
            <div className="ab-stat">
              <strong>12K+</strong>
              <span>Active students</span>
            </div>
            <div className="ab-stat">
              <strong>150+</strong>
              <span>Video courses</span>
            </div>
            <div className="ab-stat">
              <strong>40+</strong>
              <span>Expert instructors</span>
            </div>
            <div className="ab-stat">
              <strong>4.8</strong>
              <span>Average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION + VISION ================= */}
      <section className="ab-section ab-section--alt">
        <div className="ab-wrap ab-duo">
          <div className="ab-card ab-card--big">
            <span className="ab-icon">🎯</span>
            <h3>Our mission</h3>
            <p>
              To give every student access to quality education that is easy to
              understand, affordable and useful in real life.
            </p>
          </div>
          <div className="ab-card ab-card--big">
            <span className="ab-icon">🚀</span>
            <h3>Our vision</h3>
            <p>
              A world where anyone can learn a new skill from home and use it to
              build a better career, no matter where they live.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="ab-section">
        <div className="ab-wrap">
          <div className="ab-head">
            <h2>What we believe in</h2>
            <p>The values that guide every course we make.</p>
          </div>

          <div className="ab-grid ab-grid--4">
            <div className="ab-card">
              <span className="ab-icon">💡</span>
              <h3>Clear teaching</h3>
              <p>Simple words, short lessons and examples you can follow easily.</p>
            </div>
            <div className="ab-card">
              <span className="ab-icon">🤝</span>
              <h3>Student first</h3>
              <p>We listen to feedback and improve our courses every month.</p>
            </div>
            <div className="ab-card">
              <span className="ab-icon">💰</span>
              <h3>Affordable</h3>
              <p>Fair prices and many free courses, so money is never a barrier.</p>
            </div>
            <div className="ab-card">
              <span className="ab-icon">✅</span>
              <h3>Real results</h3>
              <p>Projects and quizzes make sure you can actually use what you learn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="ab-section ab-section--alt">
        <div className="ab-wrap">
          <div className="ab-head">
            <h2>Our journey</h2>
            <p>From a small idea to thousands of learners.</p>
          </div>

          <div className="ab-grid ab-grid--4">
            <div className="ab-step">
              <span className="ab-step__year">2023</span>
              <h3>The idea</h3>
              <p>A small team of teachers and developers decides to build a better way to learn online.</p>
            </div>
            <div className="ab-step">
              <span className="ab-step__year">2024</span>
              <h3>First courses</h3>
              <p>We launch our first 20 courses and welcome our first 1,000 students.</p>
            </div>
            <div className="ab-step">
              <span className="ab-step__year">2025</span>
              <h3>Live classes</h3>
              <p>Live doubt-clearing sessions and certificates are added to every course.</p>
            </div>
            <div className="ab-step">
              <span className="ab-step__year">2026</span>
              <h3>12K+ learners</h3>
              <p>Over 150 courses and a growing community of students and instructors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="ab-section">
        <div className="ab-wrap">
          <div className="ab-head">
            <h2>Meet the team</h2>
            <p>The people behind LearnLoop.</p>
          </div>

          <div className="ab-grid ab-grid--4">
            <div className="ab-card ab-person">
              <span className="ab-avatar">A</span>
              <h3>Anika Sen</h3>
              <p>Founder and CEO</p>
            </div>
            <div className="ab-card ab-person">
              <span className="ab-avatar">R</span>
              <h3>Rohan Das</h3>
              <p>Head of Courses</p>
            </div>
            <div className="ab-card ab-person">
              <span className="ab-avatar">S</span>
              <h3>Sneha Roy</h3>
              <p>Lead Designer</p>
            </div>
            <div className="ab-card ab-person">
              <span className="ab-avatar">K</span>
              <h3>Karan Mehta</h3>
              <p>Student Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="ab-section ab-section--tight">
        <div className="ab-wrap">
          <div className="ab-cta">
            <div>
              <h2>Join our learning community</h2>
              <p>Create a free account and start your first course today.</p>
            </div>
            <Link to="/register" className="ab-btn ab-btn--solid">Create free account</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
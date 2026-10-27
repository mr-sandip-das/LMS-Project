import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navber from "../components/Navber.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/style/pages/Course.css";

/* One course card. It hides itself when it does not match the
   selected category or the search text from the navbar. */
function CourseCard({ filter, category, emoji, thumb, level, title, info, rating, students, price }) {
  const matchCategory = filter.category === "all" || filter.category === category;
  const matchSearch = `${title} ${info}`.toLowerCase().includes(filter.search);

  if (!matchCategory || !matchSearch) return null;

  return (
    <article className="cs-card">
      <div className={`cs-card__thumb ${thumb}`}>
        <span>{emoji}</span>
        <em className="cs-level">{level}</em>
      </div>
      <div className="cs-card__body">
        <h3>{title}</h3>
        <p className="cs-card__info">{info}</p>
        <p className="cs-card__meta">
          <span className="cs-rating">★ {rating}</span>
          <span>{students} students</span>
        </p>
        <div className="cs-card__foot">
          <strong className="cs-price">{price}</strong>
          <Link to="/register" className="cs-enroll">Enroll now</Link>
        </div>
      </div>
    </article>
  );
}

function Course() {
  const [category, setCategory] = useState("all");
  const [params] = useSearchParams();

  // Text typed in the navbar search box (/course?search=...)
  const searchText = (params.get("search") || "").trim();
  const filter = { category, search: searchText.toLowerCase() };

  return (
    <div>
      <Navber />

      {/* ================= HERO ================= */}
      <section className="cs-hero">
        <div className="cs-wrap cs-hero__inner">
          <p className="cs-crumb">
            <Link to="/">Home</Link> / Course
          </p>
          <h1>Find the right course for you</h1>
          <p className="cs-hero__text">
            Short lessons, real projects and certificates. Pick a category or use
            the search bar at the top to find your next skill.
          </p>
        </div>
      </section>

      {/* ================= FILTERS + COURSES ================= */}
      <section className="cs-section">
        <div className="cs-wrap">
          {searchText && (
            <p className="cs-search-note">
              Showing results for <strong>“{searchText}”</strong>
              <Link to="/course">Clear search</Link>
            </p>
          )}

          <div className="cs-chips" role="group" aria-label="Filter by category">
            <button type="button" className={`cs-chip ${category === "all" ? "is-active" : ""}`} onClick={() => setCategory("all")}>All courses</button>
            <button type="button" className={`cs-chip ${category === "web" ? "is-active" : ""}`} onClick={() => setCategory("web")}>💻 Web Development</button>
            <button type="button" className={`cs-chip ${category === "data" ? "is-active" : ""}`} onClick={() => setCategory("data")}>📊 Data</button>
            <button type="button" className={`cs-chip ${category === "design" ? "is-active" : ""}`} onClick={() => setCategory("design")}>🎨 Design</button>
            <button type="button" className={`cs-chip ${category === "business" ? "is-active" : ""}`} onClick={() => setCategory("business")}>💼 Business</button>
            <button type="button" className={`cs-chip ${category === "language" ? "is-active" : ""}`} onClick={() => setCategory("language")}>🌍 Languages</button>
          </div>

          <div className="cs-grid">
            <CourseCard filter={filter} category="web" emoji="💻" thumb="thumb--1" level="Beginner"
              title="Complete Web Development" info="HTML, CSS and JavaScript · 48 lessons"
              rating="4.9" students="5.2K" price="₹499" />

            <CourseCard filter={filter} category="web" emoji="⚛️" thumb="thumb--2" level="Intermediate"
              title="React from Scratch" info="Hooks, Router and projects · 36 lessons"
              rating="4.8" students="3.1K" price="₹699" />

            <CourseCard filter={filter} category="web" emoji="🖥️" thumb="thumb--3" level="Intermediate"
              title="Node.js and Express Backend" info="APIs, database and login · 32 lessons"
              rating="4.7" students="2.4K" price="₹649" />

            <CourseCard filter={filter} category="data" emoji="🐍" thumb="thumb--4" level="Beginner"
              title="Python for Everyone" info="Basics to automation · 40 lessons"
              rating="4.8" students="6.8K" price="Free" />

            <CourseCard filter={filter} category="data" emoji="📊" thumb="thumb--5" level="Intermediate"
              title="Data Analysis with Excel" info="Formulas, charts and dashboards · 30 lessons"
              rating="4.7" students="2.9K" price="₹549" />

            <CourseCard filter={filter} category="design" emoji="🎨" thumb="thumb--6" level="Beginner"
              title="UI / UX Design Basics" info="Figma, layouts and colors · 28 lessons"
              rating="4.7" students="3.6K" price="₹399" />

            <CourseCard filter={filter} category="design" emoji="🖌️" thumb="thumb--1" level="Beginner"
              title="Graphic Design with Canva" info="Posters, logos and social posts · 20 lessons"
              rating="4.6" students="4.1K" price="Free" />

            <CourseCard filter={filter} category="business" emoji="📣" thumb="thumb--2" level="Beginner"
              title="Digital Marketing Essentials" info="SEO, social media and ads · 26 lessons"
              rating="4.6" students="2.2K" price="₹449" />

            <CourseCard filter={filter} category="language" emoji="🗣️" thumb="thumb--3" level="Beginner"
              title="Spoken English Confidence" info="Speaking practice every day · 24 lessons"
              rating="4.6" students="7.4K" price="Free" />
          </div>
        </div>
      </section>

      {/* ================= HELP BANNER ================= */}
      <section className="cs-section cs-section--tight">
        <div className="cs-wrap">
          <div className="cs-cta">
            <div>
              <h2>Can’t find the course you want?</h2>
              <p>Tell us what you want to learn and we will try to add it soon.</p>
            </div>
            <Link to="/contact" className="cs-btn">Contact us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Course;
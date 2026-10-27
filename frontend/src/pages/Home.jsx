import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navber from "../components/Navber.jsx"
import Footer from "../components/Footer.jsx";
import "../assets/style/pages/Home.css";

const TOTAL_SLIDES = 3;

function Home() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % TOTAL_SLIDES);
  const prev = () => setIndex((index - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);

  // Auto-play: go to the next slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % TOTAL_SLIDES), 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <Navber />

      {/* ================= 1. HERO SLIDER ================= */}
      <section className="hero" aria-label="Featured highlights">
        <div
          className="slider__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className={`slide slide--1 ${index === 0 ? "is-active" : ""}`}>
            <div className="home-wrap slide__inner">
              <div className="slide__text">
                <h1 className="slide__title">Learn new skills at your own pace</h1>
                <p>
                  Watch lessons anytime, practice with real projects and track your
                  progress from one simple dashboard.
                </p>
                <div className="slide__buttons">
                  <Link to="/course" className="home-btn home-btn--solid">Browse courses</Link>
                  <Link to="/register" className="home-btn home-btn--outline">Join for free</Link>
                </div>
              </div>
              <div className="hero-card">
                <p className="hero-card__small">Continue learning</p>
                <h3>React for Beginners</h3>
                <div className="progress"><span style={{ width: "68%" }} /></div>
                <p className="hero-card__small">Lesson 14 of 20 · 68% done</p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`slide slide--2 ${index === 1 ? "is-active" : ""}`}>
            <div className="home-wrap slide__inner">
              <div className="slide__text">
                <h2 className="slide__title">Earn certificates you can share</h2>
                <p>
                  Finish a course, pass the final quiz and get a certificate to add to
                  your resume or LinkedIn profile.
                </p>
                <div className="slide__buttons">
                  <Link to="/course" className="home-btn home-btn--solid">Start a course</Link>
                  <Link to="/about" className="home-btn home-btn--outline">How it works</Link>
                </div>
              </div>
              <div className="hero-card">
                <p className="hero-card__small">Certificate of completion</p>
                <h3>UI Design Basics</h3>
                <p className="hero-card__ok">✓ Verified and shareable</p>
                <p className="hero-card__small">Issued after the final quiz</p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className={`slide slide--3 ${index === 2 ? "is-active" : ""}`}>
            <div className="home-wrap slide__inner">
              <div className="slide__text">
                <h2 className="slide__title">Get your doubts cleared in live classes</h2>
                <p>
                  Join live sessions with instructors, ask questions in real time and
                  watch the recording later if you miss one.
                </p>
                <div className="slide__buttons">
                  <Link to="/course" className="home-btn home-btn--solid">See live classes</Link>
                  <Link to="/contact" className="home-btn home-btn--outline">Talk to us</Link>
                </div>
              </div>
              <div className="hero-card">
                <p className="hero-card__small">Live today · 6:00 PM</p>
                <h3>Python doubt-clearing session</h3>
                <p className="hero-card__ok">● 240 students joined</p>
                <p className="hero-card__small">Recording available after class</p>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="slider__arrow slider__arrow--prev" aria-label="Previous slide" onClick={prev}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button type="button" className="slider__arrow slider__arrow--next" aria-label="Next slide" onClick={next}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
        </button>

        <div className="slider__dots">
          <button type="button" aria-label="Go to slide 1" className={`slider__dot ${index === 0 ? "is-active" : ""}`} onClick={() => setIndex(0)} />
          <button type="button" aria-label="Go to slide 2" className={`slider__dot ${index === 1 ? "is-active" : ""}`} onClick={() => setIndex(1)} />
          <button type="button" aria-label="Go to slide 3" className={`slider__dot ${index === 2 ? "is-active" : ""}`} onClick={() => setIndex(2)} />
        </div>
      </section>

      {/* ================= 2. STATS ================= */}
      <section className="stats">
        <div className="home-wrap stats__grid">
          <div className="stat">
            <strong>12K+</strong>
            <span>Active students</span>
          </div>
          <div className="stat">
            <strong>150+</strong>
            <span>Video courses</span>
          </div>
          <div className="stat">
            <strong>40+</strong>
            <span>Expert instructors</span>
          </div>
          <div className="stat">
            <strong>4.8</strong>
            <span>Average rating</span>
          </div>
        </div>
      </section>

      {/* ================= 3. CATEGORIES ================= */}
      <section className="section">
        <div className="home-wrap">
          <div className="section__head">
            <div>
              <h2>Explore top categories</h2>
              <p>Pick a subject and start learning today.</p>
            </div>
          </div>

          <div className="grid grid--categories">
            <Link to="/course" className="card category">
              <span className="icon-box">💻</span>
              <h3>Web Development</h3>
              <p>32 courses</p>
            </Link>
            <Link to="/course" className="card category">
              <span className="icon-box">📊</span>
              <h3>Data Science</h3>
              <p>21 courses</p>
            </Link>
            <Link to="/course" className="card category">
              <span className="icon-box">🎨</span>
              <h3>UI / UX Design</h3>
              <p>18 courses</p>
            </Link>
            <Link to="/course" className="card category">
              <span className="icon-box">💼</span>
              <h3>Business</h3>
              <p>26 courses</p>
            </Link>
            <Link to="/course" className="card category">
              <span className="icon-box">🌍</span>
              <h3>Languages</h3>
              <p>15 courses</p>
            </Link>
            <Link to="/course" className="card category">
              <span className="icon-box">📷</span>
              <h3>Photography</h3>
              <p>12 courses</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4. POPULAR COURSES ================= */}
      <section className="section section--alt">
        <div className="home-wrap">
          <div className="section__head">
            <div>
              <h2>Popular courses</h2>
              <p>Most joined by students this month.</p>
            </div>
            <Link to="/course" className="section__link">View all courses</Link>
          </div>

          <div className="grid grid--courses">
            <article className="card course">
              <div className="course__thumb thumb--1">💻</div>
              <div className="course__body">
                <span className="badge">Beginner</span>
                <h3>Complete Web Development</h3>
                <p className="course__meta">HTML, CSS, JavaScript · 48 lessons</p>
                <div className="course__foot">
                  <span className="rating">★ 4.9</span>
                  <strong className="price">₹499</strong>
                  <Link to="/course" className="course__btn">Enroll</Link>
                </div>
              </div>
            </article>

            <article className="card course">
              <div className="course__thumb thumb--2">⚛️</div>
              <div className="course__body">
                <span className="badge">Intermediate</span>
                <h3>React from Scratch</h3>
                <p className="course__meta">Hooks, Router, projects · 36 lessons</p>
                <div className="course__foot">
                  <span className="rating">★ 4.8</span>
                  <strong className="price">₹699</strong>
                  <Link to="/course" className="course__btn">Enroll</Link>
                </div>
              </div>
            </article>

            <article className="card course">
              <div className="course__thumb thumb--3">🐍</div>
              <div className="course__body">
                <span className="badge">Beginner</span>
                <h3>Python for Everyone</h3>
                <p className="course__meta">Basics to automation · 40 lessons</p>
                <div className="course__foot">
                  <span className="rating">★ 4.8</span>
                  <strong className="price">Free</strong>
                  <Link to="/course" className="course__btn">Enroll</Link>
                </div>
              </div>
            </article>

            <article className="card course">
              <div className="course__thumb thumb--4">🎨</div>
              <div className="course__body">
                <span className="badge">Beginner</span>
                <h3>UI / UX Design Basics</h3>
                <p className="course__meta">Figma, layouts, colors · 28 lessons</p>
                <div className="course__foot">
                  <span className="rating">★ 4.7</span>
                  <strong className="price">₹399</strong>
                  <Link to="/course" className="course__btn">Enroll</Link>
                </div>
              </div>
            </article>

            <article className="card course">
              <div className="course__thumb thumb--5">📊</div>
              <div className="course__body">
                <span className="badge">Advanced</span>
                <h3>Data Analysis with Excel</h3>
                <p className="course__meta">Formulas, charts, dashboards · 30 lessons</p>
                <div className="course__foot">
                  <span className="rating">★ 4.7</span>
                  <strong className="price">₹549</strong>
                  <Link to="/course" className="course__btn">Enroll</Link>
                </div>
              </div>
            </article>

            <article className="card course">
              <div className="course__thumb thumb--6">🗣️</div>
              <div className="course__body">
                <span className="badge">Beginner</span>
                <h3>Spoken English Confidence</h3>
                <p className="course__meta">Speaking practice · 24 lessons</p>
                <div className="course__foot">
                  <span className="rating">★ 4.6</span>
                  <strong className="price">Free</strong>
                  <Link to="/course" className="course__btn">Enroll</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= 5. WHY CHOOSE US ================= */}
      <section className="section">
        <div className="home-wrap">
          <div className="section__head">
            <div>
              <h2>Why students choose LearnLoop</h2>
              <p>Everything you need to learn, practice and grow in one place.</p>
            </div>
          </div>

          <div className="grid grid--features">
            <div className="card feature">
              <span className="icon-box">🎥</span>
              <h3>Learn anytime</h3>
              <p>Watch recorded lessons on your phone or laptop, whenever you are free.</p>
            </div>
            <div className="card feature">
              <span className="icon-box">🧑‍🏫</span>
              <h3>Expert instructors</h3>
              <p>Courses are taught by people who work in the field every day.</p>
            </div>
            <div className="card feature">
              <span className="icon-box">📝</span>
              <h3>Quizzes and projects</h3>
              <p>Test what you learned after each module and build real work for your portfolio.</p>
            </div>
            <div className="card feature">
              <span className="icon-box">🏅</span>
              <h3>Certificates</h3>
              <p>Get a certificate when you finish, and share it with employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. HOW IT WORKS ================= */}
      <section className="section section--alt">
        <div className="home-wrap">
          <div className="section__head">
            <div>
              <h2>Start learning in 3 steps</h2>
              <p>It takes less than a minute to get started.</p>
            </div>
          </div>

          <div className="grid grid--steps">
            <div className="card step">
              <span className="step__num">1</span>
              <h3>Create your account</h3>
              <p>Register with your email. It is free and takes a few seconds.</p>
            </div>
            <div className="card step">
              <span className="step__num">2</span>
              <h3>Pick a course</h3>
              <p>Browse categories or use the search bar to find what you need.</p>
            </div>
            <div className="card step">
              <span className="step__num">3</span>
              <h3>Learn and get certified</h3>
              <p>Finish the lessons, pass the quiz and download your certificate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. TESTIMONIALS ================= */}
      <section className="section">
        <div className="home-wrap">
          <div className="section__head">
            <div>
              <h2>What our students say</h2>
              <p>Stories from learners who finished a course.</p>
            </div>
          </div>

          <div className="grid grid--testimonials">
            <figure className="card quote">
              <blockquote>
                The lessons are short and clear. I built my first website in two weeks
                and finally understood how CSS works.
              </blockquote>
              <figcaption>
                <span className="avatar">R</span>
                <div>
                  <strong>Rahul S.</strong>
                  <span>Web Development student</span>
                </div>
              </figcaption>
            </figure>

            <figure className="card quote">
              <blockquote>
                Live classes helped me a lot. I could ask my doubts and get answers
                right away instead of waiting for days.
              </blockquote>
              <figcaption>
                <span className="avatar">P</span>
                <div>
                  <strong>Priya M.</strong>
                  <span>Python student</span>
                </div>
              </figcaption>
            </figure>

            <figure className="card quote">
              <blockquote>
                I added my certificate to my resume and got calls from two companies.
                The projects made the difference.
              </blockquote>
              <figcaption>
                <span className="avatar">A</span>
                <div>
                  <strong>Amit K.</strong>
                  <span>UI / UX student</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================= 8. CALL TO ACTION ================= */}
      <section className="section section--tight">
        <div className="home-wrap">
          <div className="cta">
            <div>
              <h2>Ready to start learning?</h2>
              <p>Join thousands of students and pick your first course today.</p>
            </div>
            <Link to="/register" className="home-btn home-btn--solid">Create free account</Link>
          </div>
        </div>
      </section>

      {/* ================= 9. FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default Home;
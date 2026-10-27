import { Link } from "react-router-dom";
import Navber from "../components/Navber.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/style/pages/ContactUs.css";

function ContactUs() {
  return (
    <div>
      <Navber />

      {/* ================= HERO ================= */}
      <section className="ct-hero">
        <div className="ct-wrap ct-hero__inner">
          <p className="ct-crumb">
            <Link to="/">Home</Link> / Contact us
          </p>
          <h1>We’d love to hear from you</h1>
          <p className="ct-hero__text">
            Have a question about a course, your account or a payment? Send us a
            message and our team will reply within one working day.
          </p>
        </div>
      </section>

      {/* ================= INFO + FORM ================= */}
      <section className="ct-section">
        <div className="ct-wrap ct-layout">
          {/* Left: contact details */}
          <div className="ct-info">
            <div className="ct-info__card">
              <span className="ct-icon">✉️</span>
              <div>
                <h3>Email us</h3>
                <p>support@learnloop.com</p>
              </div>
            </div>

            <div className="ct-info__card">
              <span className="ct-icon">📞</span>
              <div>
                <h3>Call us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="ct-info__card">
              <span className="ct-icon">📍</span>
              <div>
                <h3>Visit us</h3>
                <p>West Bengal, India</p>
              </div>
            </div>

            <div className="ct-info__card">
              <span className="ct-icon">🕘</span>
              <div>
                <h3>Working hours</h3>
                <p>Mon – Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="ct-form-card">
            <h2>Send us a message</h2>
            <p className="ct-form-card__sub">Fill in the form and we will get back to you soon.</p>

            {/* Plain form: connect the action to your backend later */}
            <form className="ct-form" action="#">
              <div className="ct-row">
                <label className="ct-field">
                  <span>Full name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label className="ct-field">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <label className="ct-field">
                <span>Subject</span>
                <select name="subject" defaultValue="">
                  <option value="" disabled>Choose a topic</option>
                  <option>Course question</option>
                  <option>Payment or refund</option>
                  <option>Technical problem</option>
                  <option>Become an instructor</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="ct-field">
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Write your message here..." required />
              </label>

              <button type="submit" className="ct-submit">Send message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="ct-section ct-section--alt">
        <div className="ct-wrap ct-faq">
          <div className="ct-head">
            <h2>Frequently asked questions</h2>
            <p>Quick answers to common questions.</p>
          </div>

          <details className="ct-faq__item">
            <summary>How do I enroll in a course?</summary>
            <p>Create a free account, open the Course page, choose a course and click “Enroll now”.</p>
          </details>

          <details className="ct-faq__item">
            <summary>Are there free courses?</summary>
            <p>Yes. Many of our beginner courses are free, and you still get access to quizzes and projects.</p>
          </details>

          <details className="ct-faq__item">
            <summary>Will I get a certificate?</summary>
            <p>You get a certificate after you finish all the lessons and pass the final quiz of a course.</p>
          </details>

          <details className="ct-faq__item">
            <summary>Can I watch lessons on my phone?</summary>
            <p>Yes. The website works on phones, tablets and laptops, so you can learn anywhere.</p>
          </details>

          <details className="ct-faq__item">
            <summary>How can I ask for a refund?</summary>
            <p>Choose “Payment or refund” in the form above and send us your course name and email.</p>
          </details>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;

import { Link } from "react-router-dom";
import "../assets/style/pages/Register.css";

function Register() {
  return (
    <main className="register-page">
      <section className="register-card">

        {/* Logo */}
        <Link to="/" className="register-logo">
          <span className="register-logo__icon">L</span>
          <span>LearnLoop</span>
        </Link>

        {/* Heading */}
        <div className="register-heading">
          <h1>Create your account</h1>
          <p>Join LearnLoop and start your learning journey.</p>
        </div>

        {/* Registration Form */}
        <form className="register-form">

          <div className="register-field">
            <label htmlFor="register-name">Full name</label>
            <input
              type="text"
              id="register-name"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="register-email">Email address</label>
            <input
              type="email"
              id="register-email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              id="register-password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="register-domain">Select your domain</label>
            <select
              id="register-domain"
              name="domain"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Choose your learning domain
              </option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="software-development">Software Development</option>
              <option value="data-science">Data Science</option>
              <option value="artificial-intelligence">
                Artificial Intelligence
              </option>
              <option value="cyber-security">Cyber Security</option>
              <option value="cloud-computing">Cloud Computing</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label className="register-terms">
            <input type="checkbox" name="terms" required />
            <span>
              I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </span>
          </label>

          <button type="submit" className="register-submit">
            Create account
            <span>→</span>
          </button>

        </form>

        {/* Footer */}
        <div className="register-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>

          <span>© 2026 LearnLoop. All rights reserved.</span>
        </div>

      </section>
    </main>
  );
}

export default Register;

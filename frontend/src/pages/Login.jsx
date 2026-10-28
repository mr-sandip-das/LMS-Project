
import { Link } from "react-router-dom";
import "../assets/style/pages/Login.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">

        <Link to="/" className="login-logo">
          <span className="login-logo__icon">L</span>
          <span>LearnLoop</span>
        </Link>

        <div className="login-heading">
          <h1>Welcome back</h1>
          <p>Sign in to continue to your learning account.</p>
        </div>

        <form className="login-form">
          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <label className="login-remember">
            <input type="checkbox" name="remember" />
            <span>Remember me</span>
          </label>

          <button type="submit" className="login-submit">
            Sign in
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create account</Link>
          </p>

          <span className="login-copyright">
            © 2026 LearnLoop. All rights reserved.
          </span>
        </div>

      </section>
    </main>
  );
}

export default Login;

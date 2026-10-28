
import { Link } from "react-router-dom";
import "../assets/style/pages/Login.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:2000/api/auth/login",{email,password});
      setEmail("");
      setPassword("");
      navigate("/")
      
    } catch (error) {
      console.log(error.message);
    }
  };
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

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <input
              type="text"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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

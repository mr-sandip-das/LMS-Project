
import { Link } from "react-router-dom";
import "../assets/style/pages/Register.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import toasr from "react-hot-toast";

function Register() {
  const navigate=useNavigate();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [domain,setDomain]=useState("");

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:2000/api/auth/register",{
        name,email,password,domain
      });
      console.log(response);
      if (response.data.success){
        
      setName();
      setEmail();
      setPassword();
      setDomain();
      toasr.success(response.data.message);
      navigate("/login");
      }
      else{
        toasr.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <form className="register-form" onSubmit={handleSubmit}>

          <div className="register-field">
            <label htmlFor="register-name">Full name</label>
            <input
              type="text"
              id="register-name"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="register-email">Email address</label>
            <input
              type="email"
              id="register-email"
              placeholder="Enter your email address"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="register-password">Password</label>
            <input
              type="text"
              id="register-password"
              placeholder="Create a password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="register-domain">Select your domain</label>
            <select
              id="register-domain"
              name="domain"
              defaultValue={domain}
              onChange={(e)=>setDomain(e.target.value)}
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

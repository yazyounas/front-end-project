import { useState } from "react";
import SignUp from "./SignUp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(true);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowSignUp(true);
    setShowLogIn(false);
  };

  return (
    <div>
      {showLogIn && (
        <form>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Email address"
            autoComplete="off"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your Password"
            autoComplete="off"
            required
          />
          <button type="submit" for="loginForm">
            Login
          </button>
          <button type="submit" onClick={handleRegisterClick}>
            Register
          </button>
        </form>
      )}
      {showSignUp && <SignUp />}
    </div>
  );
}

export default Login;

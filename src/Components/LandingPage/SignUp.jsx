import { useState } from "react";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <form>
      <label for="email">User Name</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Enter User Name"
          autocomplete="off"
          required
        />
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email address"
          autocomplete="off"
          required
        />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your Password"
          autocomplete="off"
          required
        />
        <button type="submit" for="loginForm">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUp;

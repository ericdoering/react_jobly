import React, { useState } from "react"
import JoblyApi from "../api/api";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = evt => {
    setUsername(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function login() {
      const token = await JoblyApi.login(username, password);
      if(token) {
        localStorage.setItem('auth-token', token)
        history.push('/home')
      }
    }
    login()
};

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label className="element" htmlFor="username">Username:</label>
        <input 
          className="element"
          id="username"
          name="username"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
        <label className="element" htmlFor="password">Password:</label>
        <input
          className="element"
          id="password"
          name="password"
          type="text"
          onChange={handleChangePassword}
          value={password}
        />
        <button className="element" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
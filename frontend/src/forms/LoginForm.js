import React, { useState } from "react"
import {v4 as uuid} from "uuid";
import JoblyApi from "../api/api";
import { useHistory } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="text"
          onChange={handleChangePassword}
          value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
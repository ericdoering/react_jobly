import React, { useState } from "react"
import {v4 as uuid} from "uuid";

function LoginForm({ usernameSubmit, passwordSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = evt => {
    setUsername(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };


  const gatherInputs = evt => {
    evt.preventDefault();
    username({ usernameSubmit, id: uuid() });
    setUsername("");
    password({ passwordSubmit, id: uuid() });
    setPassword("");
    };

  return (
    <div>
      <form onSubmit={gatherInputs}>
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
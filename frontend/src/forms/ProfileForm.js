import React, { useState } from "react"
import {v4 as uuid} from "uuid"; 
import { useHistory } from "react-router-dom";
import JoblyApi from "../api/api";

function ProfileForm({ usernameSubmit, passwordSubmit, firstNameSubmit, lastNameSubmit, emailSubmit }) {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeUsername = evt => {
    setUsername(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleChangeFirstName = evt => {
    setFirstName(evt.target.value);
  };

  const handleChangeLastName = evt => {
    setLastName(evt.target.value);
  };

  const handleChangeEmail = evt => {
    setEmail(evt.target.value);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function edit() {
      const token = await JoblyApi.edit(username, password, firstName, lastName, email);
      if(token) {
        localStorage.setItem('auth-token', token)
        history.push('/home')
      }
    }
    edit()
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
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChangeFirstName}
          value={firstName}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChangeLastName}
          value={lastName}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChangeEmail}
          value={email}
        />
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;
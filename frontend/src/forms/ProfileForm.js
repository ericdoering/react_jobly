import React, { useState } from "react"
import {v4 as uuid} from "uuid"; 
import { useHistory } from "react-router-dom";
import JoblyApi from "../api/api";
import { parseJwt } from "../jwt"

function ProfileForm({ usernameSubmit, firstNameSubmit, lastNameSubmit, emailSubmit }) {
  const history = useHistory()
  const token = localStorage.getItem("auth-token");
  const username = parseJwt(token)["username"];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
      const user = await JoblyApi.edit(username, firstName, lastName, email);
      history.push('/home')
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
          disabled
          type="text"
          value={username}
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
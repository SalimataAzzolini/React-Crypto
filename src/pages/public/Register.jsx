import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      credentials,
    ),
  };

  const onSubmit = (e) => {
    e.preventDefault();
/*     console.log(credentials); */
    fetch(
        "https://social-network-api.osc-fr1.scalingo.io/crypto-sali/register",
        options
      )
      .then((res) => {
         console.log(res);
      })
      .catch((error) => console.log(error));
  };



  return (
    <div>
  

      <form className="container-form" onSubmit={onSubmit}>
        <div className="brand-logo"></div>
        <div className="brand-title">REGISTER</div>

        <div className="inputs">
          <label>Firstname</label>
          <input
            type="text"
            placeholder="Firsname"
            name="firstname"
            value={credentials.firstname}
            onChange={onChange}
          />

          <label>Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={credentials.lastname}
            onChange={onChange}
          />

          <label>EMAIL</label>
          <input
            type="email"
            placeholder="example@test.com"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />

          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 charaters long"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />

          <button type="submit">RGISTER</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

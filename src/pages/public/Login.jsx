import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./public.css";

const Login = () => {

let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
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

  async function onSubmit(e) {
    e.preventDefault();

    let saveToken = (token) => {
        localStorage.setItem('token', token)
    }
/*     console.log(credentials); */
  await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/crypto-sali/login",
        options
      )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.success === true){
            saveToken(data.token)
            navigate('/users', {replace: true})
        }else{
            alert(data.message)
     
            
        }
      })
      .catch((error) => console.log(error));
  };




  return (
    <div>

      <form className="container-form " onSubmit={onSubmit}>

        <div className="brand-logo"></div>
        <div className="brand-title">LOGIN</div>

        <div className="inputs">
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
          <button type="submit">LOGIN</button>
        </div>

      </form>
    </div>
  );
};

export default Login;

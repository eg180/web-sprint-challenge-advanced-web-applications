import React, { useState } from "react";
import axios from 'axios';



const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });


  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
    .then(req => {
      console.log('data received from submit / login to server:')
      console.log(req)
      window.localStorage.setItem("token", req.data.payload)
      props.history.push('/bubble')
    })
    .catch(err => {
      console.log(err)
    })
  }



  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Sign In!</p>
      <form onSubmit={login}>
        <input
        type="text"
        name="username"
        onChange={handleChange}
        value={credentials.username}
        />

        <input
        type="password"
        name="password"
        onChange={handleChange}
        value={credentials.password}
        />
        <button>Log In</button>
        
      </form>
    </>
  );
};

export default Login;

import React, { useState } from "react";

const Login = () => {

  const [credentials, setCredentials] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });




  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Sign In</p>
      <form >
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
      </form>
    </>
  );
};

export default Login;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

import { Row, Col } from 'antd';
import SignUp from '../../components/SignUp/SignUp';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  })
    .then(data => data.json())
    .catch(err => console.log('Error:', err));
}

export default function Login({ setToken }) {
  const [email, setEmail ] = useState();
  const [password, setPassword ] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    // check if token is defined
    if (token) {
      setToken(token);
    } else {
      console.log('Incorrect information submitted. Retry or sign up for an account.');
    }
  }

  return (
    // <Row className="login-wrapper">
    <Row>
        <Col span={15}>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email</p>
              <input type="text" onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Sign In</button>
            </div>
          </form>
        </Col>
        <Col>
          <SignUp />
        </Col>
    </Row>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
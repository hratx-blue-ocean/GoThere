import React from 'react';
import LoginForm from '../../components/SignIn/LoginForm';
import SignUp from '../../components/SignUp/SignUp';
import './Login.css';

export default function Login({ setLoggedIn }) {
  return (
    <div className="login-wrapper">
        <LoginForm setLoggedIn={setLoggedIn}/>
        <SignUp setLoggedIn={setLoggedIn}/>
    </div>
  );
}
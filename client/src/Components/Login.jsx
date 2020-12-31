import React from 'react';
import { Row, Col } from 'antd';
import SignUp from './SignUp.jsx';

const Login = () => {
    return (
        <Row>
            <Col className="login-component" span={15}>
                <p>Login Component</p>
                <form>
                    <label htmlFor="email">Email</label><br></br>
                    <input type="text"></input><br></br><br></br>
                    <label htmlFor="password">Password</label><br></br>
                    <input type="text"></input>
                    <p>Show Password</p>
                    <input type="submit" value="Sign In"></input>
                    <p>Forgot Password?</p>
                </form>
            </Col>
            <Col>
                <SignUp />
            </Col>
        </Row>
    );
};

export default Login;
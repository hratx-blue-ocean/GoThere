import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import SignUp from '../SignUp/SignUp';

const LoginForm = ({ setToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:8080/login', {
            email,
            password
        }).then((res) => {
            console.log("Axios POST response:", res);
        }).catch((err) => {
            console.log("Error with post request:", err);
        })
    };

    return (
        <div>
            <h2>Account Login</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                {/* Input for User Email */}
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Email required',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Item>

                {/* Input for User Password */}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Password required',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                {/* Remember User Password */}
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* Login Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    <br></br>
                    <br></br>
                    <p>New? Register for an account:</p>
                    {/* Sign-up Button */}
                    <SignUp />
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
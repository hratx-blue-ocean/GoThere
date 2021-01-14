import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Context } from '../../state-management/Store';


const LoginForm = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var [state, dispatch] = useContext(Context);

    // state.userID = 'Slarti Bartfast2'
    const login = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: {
                email: email,
                password: password
            },
            withCredentials: true,
        }).then((res) => {
            console.log("Axios POST response:", res ,res.config.data)
            var emailArr = res.config.data.split('"')
            dispatch({type: 'SET_USER_EMAIL', payload: emailArr[3]})
            dispatch({type: 'SET_USER', payload: res.data.name})
            console.log('login name change', state.email, 'res', res.data.name)
            setLoggedIn(true);
        }).catch((err) => {
            console.log("Error with post request:", err);
        })
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <h2 className="login-title">Account Login</h2>
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
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                {/* Login Button */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={login}
                    >
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
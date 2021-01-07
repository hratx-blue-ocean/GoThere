import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';

const SignUpModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Values of form for sign-up: ', values);
        axios.post('http://localhost:8080/register', {
            name,
            email,
            phone,
            password
        }).then((res) => {
            console.log("Axios POST response:", res);
        }).catch((err) => {
            console.log("Error with post request:", err);
        })
    };

    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            {/* Input for user's full name */}
            <Form.Item
                name="name"
                label="Name"
                rules={[
                {
                    required: true,
                    message: 'Full name required',
                    whitespace: true
                }
                ]}
            >
                <Input onChange={e => setName(e.target.value)} />
            </Form.Item>

            {/* Input for user's email address */}
            <Form.Item
                name="email"
                label="Email"
                rules={[
                {
                    type: 'email',
                    message: 'Not a valid email',
                },
                {
                    required: true,
                    message: 'Email required',
                },
                ]}
            >
                <Input onChange={e => setEmail(e.target.value)} />
            </Form.Item>

            {/* Input for user's phone number */}
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input onChange={e => setPhone(e.target.value)} />
            </Form.Item>

            {/* Input to create a password */}
            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Password required',
                },
                ]}
                hasFeedback
            >
                <Input.Password onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            {/* Input to confirm password */}
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject('Passwords do not match');
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            {/* Button to register for an account */}
            <Form.Item>
                <Button type="primary" htmlType="submit">Sign Up</Button>
            </Form.Item>
        </Form>
    );
};

export default SignUpModal;
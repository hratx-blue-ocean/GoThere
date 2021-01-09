import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';

const SignUpModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [form] = Form.useForm();

    const register =() => {
        axios.post('http://localhost:8080/newuser', {
            name: name,
            email: email,
            phoneNumber: phone,
            password: password
        }).then((res) => {
            console.log("Axios POST response:", res);
        }).catch((err) => {
            console.log("Error with post request:", err);
        })
    }

    const onFinish = (values) => {
        console.log('Values of form for sign-up: ', values);
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
                rules={[{ required: true, message: 'Phone number required' }]}
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
            >
                <Input.Password onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            {/* Button to register for an account */}
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={register}
                >
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUpModal;
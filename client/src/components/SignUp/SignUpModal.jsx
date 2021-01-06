import React from 'react';
import { Button, Form, Input } from 'antd';

const SignUpModal = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
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
                <Input />
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
                <Input />
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
                <Input.Password />
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
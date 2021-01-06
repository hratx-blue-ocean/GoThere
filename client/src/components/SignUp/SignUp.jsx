import React, { useState} from 'react';
import { Button, Modal } from 'antd';

const SignUp = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    return (
        <div className="signup-component">
            <p>Sign-Up Component</p>
            <Button
                className="signup-button"
                type="primary"
                onClick={showModal}
            >
                Create an Account
            </Button>
            <Modal
                title="Account Information"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Name</p>
                <p>Email</p>
                <p>Password</p>
            </Modal>
        </div>
    );
};

export default SignUp;
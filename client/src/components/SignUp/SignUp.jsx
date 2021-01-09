import React, { useState} from 'react';
import { Button, Modal } from 'antd';
import SignUpModal from './SignUpModal';

const SignUp = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };

    // const handleOk = () => {
    // setIsModalVisible(false);
    // };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    return (
        <div className="signup-component">
            <Button
                className="signup-button"
                type="primary"
                onClick={showModal}
            >
                Create an Account
            </Button>
            <Modal
                title="Create a New Account"
                footer={null}
                visible={isModalVisible}
                // onOk={handleOk}
                onCancel={handleCancel}
            >
                <SignUpModal />
            </Modal>
        </div>
    );
};

export default SignUp;
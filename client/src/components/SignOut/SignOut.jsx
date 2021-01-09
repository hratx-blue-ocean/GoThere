import React from 'react';
import Cookies from 'js-cookie';
import { Button } from 'antd';

const SignOut = ({ setLoggedIn }) => {

    const logout = () => {
        Cookies.remove('loggedIn');
        Cookies.remove('email');
        setLoggedIn(false);
    }

    return (
        <div className="logout-component">
            <Button
                className="logout-button"
                type="primary"
                onClick={() => logout()}
            >
                Log Out
            </Button>
        </div>
    );
};

export default SignOut;
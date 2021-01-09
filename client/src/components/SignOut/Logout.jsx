import React from 'react';
import Cookies from 'js-cookie';

const LogOut = ({ setLoggedIn }) => {

    const logout = () => {
        // console.log('User is logged-out!');
        Cookies.remove('loggedIn');
        Cookies.remove('email');
        setLoggedIn(false);
    }

    return (
        <div className="logout-component">
            <button className="logout-button" onClick={() => logout()}>Log Out</button>
        </div>
    );
};

export default LogOut;
import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );

    const LoggedIn = () => (
        <div>
            <h2>WELCOME, {currentUser.first_name} !!!!</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )

    return (
        currentUser ?
            LoggedIn(currentUser, logout) :
            sessionLinks()
    );
    

};

export default Greeting;
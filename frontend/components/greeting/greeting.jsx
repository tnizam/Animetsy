import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const LoggedOut = () => (
        <div>
            <Link to="/login">Login</Link>,
            <Link to="/signup">Sign Up</Link>
        </div>
    );

    const LoggedIn = () => (
        <div>
            <h2>WELCOME, {currentUser.first_name} !!!!</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
    if (currentUser) {
        return LoggedIn();
    } else {
        return LoggedOut();
    };
    

};

export default Greeting;
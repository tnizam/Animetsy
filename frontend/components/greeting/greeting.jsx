import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        <header >
            <div class="main-nav">
                <img src={window.logourl} className="logo" width="150px" height="40px"/>

                <div >
                    <input className="search-bar" type="text" placeholder="Search"/>
                </div>

                <nav className="login-signup">
                    <button onClick={() => openModal('login')}>Login</button>
                    <br/>
                    <button onClick={() => openModal('signup')}>Signup</button>
                </nav>
            </div>
            <div className="top-banner">
                <br/>
                <h2 className="font-style">Find things you'll love. Support independent sellers. Only on Animetsy.</h2>
            </div>
        </header>
        
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

// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             first_name: "",
//             email: "",
//             password: ""
//         };

//         // this.handleSubmit = this.handleSubmit.bind(this);
//         // this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
//     }

//     this.props = ({ currentUser, logout, openModal })


// }

export default Greeting;
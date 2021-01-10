import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import ProductIndexContainer from "../product/product_index_container";
import Banner from '../banner/banner'

const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        
        <div className="site-container">
            <div className="main-nav">
                <Link to={"/"}>
                    <img src={window.logourl} className="logo" width="160px" height="40px"/>
                </Link>

                
                <div className="search">
                    <div className="search-wrapper">
                        <form action="#" className="search-form">
                            <div className="search-container">
                                <input className="search-input" type="text" placeholder="Search"/>
                                {/* <input className="search-submit" type="submit" value="&#10140;"/> */}
                            </div>
                        </form>
                    </div>
                </div>
                
                <nav className="login-signup">
                    <button className="button" onClick={() => openModal('login')}>Login</button>
                    <br/>
                    <button className="button" onClick={() => openModal('signup')}>Signup</button>
                </nav>
            </div>


        </div>
        
    );

    const LoggedIn = () => (
        <div >
            <div className="main-nav">
                <Link to={"/"}>
                    <img src={window.logourl} className="logo" width="160px" height="40px"/>
                </Link>
                <div className="search">
                    <div className="search-wrapper">
                        <form action="#" className="search-form">
                            <div className="search-container">
                                <input className="search-input" type="text" placeholder="Search" />
                                {/* <input className="search-submit" type="submit" value="&#10140;"/> */}
                            </div>
                        </form>
                    </div>
                </div>

                <nav>
                    <div>
                        <button className="button" onClick={logout}>Logout</button>
                    </div>
                </nav>
            </div>
            {/* <div className="top-banner">
                <br/>
                <h2 className="font-style">Welcome Back!</h2>
            </div> */}


        </div>
        
    )

    return (
        currentUser ?
            LoggedIn(currentUser, logout) :
            sessionLinks()
    );

};

export default Greeting;
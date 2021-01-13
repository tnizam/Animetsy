import React from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';
import ProductIndexContainer from "../product/product_index_container";
import Banner from '../banner/banner'
import SearchBar from '../search/search_bar';
import SearchShow from '../search/search_show';
import '@fortawesome/fontawesome-free/js/all.js';


const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        
        <div className="site-container">
            <div className="main-nav">
                <Link to={"/"}>
                    <img src={window.logourl} className="logo" width="160px" height="40px"/>
                </Link>

                <SearchBar/> 

                <Link to={"/cart"}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>

                <nav className="login-signup">
                    <button className="button" onClick={() => openModal('login')}>Login</button>
                    <br/>
                    <button className="button" onClick={() => openModal('signup')}>Signup</button>
                </nav>

                <div>
                    
                </div>
            </div>


        </div>
        
    );

    const LoggedIn = () => (
        <div >
            <div className="main-nav">
                <Link to={"/"}>
                    <img src={window.logourl} className="logo" width="160px" height="40px"/>
                </Link>
                
                <SearchBar/> 

                <Link to={"/cart"}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>

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
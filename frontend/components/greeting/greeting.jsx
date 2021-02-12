import React from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';
import ProductIndexContainer from "../product/product_index_container";
import Banner from '../banner/banner'
import SearchBar from '../search/search_bar';
import '@fortawesome/fontawesome-free/js/all.js';


const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        
        <div className="nav-container">
            <div className="main-nav">
                <Link to={"/"}>
                    <img src={window.logourl} className="logo" width="160px" height="40px"/>
                </Link>

                <SearchBar/> 

                <nav className="login-signup">
                    <button className="button" onClick={() => openModal('login')}>Login</button>
                    <br/>
                    <button className="button" onClick={() => openModal('signup')}>Signup</button>
                </nav>

                <div className="cart">
                    <button className="cart-but" onClick={() => openModal('login')}>
                        <i className="fas fa-shopping-cart"></i></button>             
                </div>
            </div>
                
                <div className="nav-row">
                    <ul className="nav-list">

                        <li className="nav-item">
                            <a className="nav-icon" target="_blank" href="https://github.com/tnizam/Animetsy/">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-icon" target="_blank" href="https://www.linkedin.com/in/tahminanizam/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-icon" target="_blank" href="https://tnizam.github.io/">
                                <i className="fas fa-user-circle"></i>
                            </a>
                        </li>
                    </ul>
            </div>

        </div>
        
    );

    const LoggedIn = () => (
        <div className="nav-container">
            <div className="main-nav">
                <Link to={"/"}>
                    <img src={window.logourl} className="logo" width="160px" height="40px"/>
                </Link>
                
                <SearchBar/> 

                <nav>
                    <div>
                        <button className="button" onClick={logout}>Logout</button>
                    </div>
                </nav>
            
                <div className="cart">
                    <Link to={"/cart"}>
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>
                   
            </div>

            <div className="nav-row">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-icon" target="_blank" href="https://github.com/tnizam/Animetsy/">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-icon" target="_blank" href="https://www.linkedin.com/in/tahminanizam/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-icon" target="_blank" href="https://tnizam.github.io/">
                            <i className="fas fa-user-circle"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        
    )

    return (
        currentUser ?
            LoggedIn(currentUser, logout) :
            sessionLinks()
    );

};

export default Greeting;
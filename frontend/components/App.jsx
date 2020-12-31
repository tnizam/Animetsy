import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ProductIndexContainer from "./product/product_index_container";
import ProductShowContainer from "./product/product_show_container";
import CartItemContainer from "./Cart Item/cart_item_container";
import {Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Banner from './banner/banner'
import SplashContainer from './splash/splash_container'

const App = () => (
    <div>
        <Modal />
        <header >
            <GreetingContainer />
            
        </header>
        <Switch>
            {/* <Route exact path="/" component={ProductIndexContainer} /> */}
            <Route exact path="/" component={SplashContainer } />
            <Route exact path="/products/:productId" component={ProductShowContainer} />
            <Route exact path="/cartItems" component={CartItemContainer} />
        </Switch>

        <div className="footer-blank"></div>
        <footer className="footer">
            <p className="footer-tag">United States | English(US) | $(USD)</p>
        </footer>
    </div>
);

export default App;
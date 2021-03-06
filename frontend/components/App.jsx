import React from "react";
import GreetingContainer from "./greeting/greeting_container";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";
// import ProductIndexContainer from "./product/product_index_container";
import ProductShowContainer from "./product/product_show_container";
import CartItemContainer from "./Cart Item/cart_item_container";
// import SearchContainer from "./search/search_container";
import SearchShow from "./search/search_show";
import Footer from "./footer/footer";

import {Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Banner from './banner/banner'
import SplashContainer from './splash/splash_container'

const App = () => (
    <div>
        <Modal />
        <div className="content">
            <header >
                <GreetingContainer />
            </header>
            <Switch>
                <Route exact path="/" component={SplashContainer } />
                <Route exact path="/products/:productId" component={ProductShowContainer} />
                <ProtectedRoute exact path="/cart" component={CartItemContainer} />
                <Route exact path="/search" component={GreetingContainer} />
                <Route exact path="/search/:searched" component={SearchShow} /> 
            </Switch>
        </div>
            {/* <Route exact path="/" component={Footer} /> */}
            <Footer/>
    </div>
);

export default App;
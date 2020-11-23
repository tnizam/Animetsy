import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ProductIndexContainer from "./product/product_index_container";
import ProductShowContainer from "./product/product_show_container";
import {Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header >
            <GreetingContainer />
            
        </header>
        <Switch>
            <Route exact path="/" component={ProductIndexContainer} />
            <Route exact path="/products/:productId" component={ProductShowContainer} />
        </Switch>
    </div>
);

export default App;
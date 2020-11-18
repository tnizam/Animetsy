import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route, Switch} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Animetsy</h1>
            <GreetingContainer />
        </header>
        <Switch>

        </Switch>
    </div>
);

export default App;
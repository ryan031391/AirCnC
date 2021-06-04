import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import WelcomeContainer from './welcome/welcome_container';
import UserContainer from './user/user_container';
import Modal from './modal/modal';



const App = () => (
    <div>
      <Modal />
      <header>
        <h1>Welcome to AirCnC</h1>
        <WelcomeContainer />
      </header>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* <ProtectedRoute exact path="/:userId" component={UserContainer} /> */}
      </Switch>
    </div>
);
  
export default App;
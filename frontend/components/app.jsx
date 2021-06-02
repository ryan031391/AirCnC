import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
    <div>
      <header>
        <h1>Welcome to AirCnC</h1>
      </header>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
);
  
export default App;
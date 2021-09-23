import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";  //
import jwt_decode from "jwt-decode";  //
import store from "./store/store.js"  //
import { setCurrentUser, logoutUser } from "./actions/authActions"; //
import { Provider } from "react-redux"; //
import Login from "./components/auth/Login";  //
import Register from "./components/auth/Register";  //
import PrivateRoute from "./private-route/PrivateRoute"; //
import Read from "./components/pages/Read";
import Create from "./components/pages/Create";
import Update from "./components/pages/Update";
import Navbar from "./components/layouts/Navbar";

// Check for token to keep user logged in 
if (localStorage.jwtToken) {
  // set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token 
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user 
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route path="/" exact component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" exact component={Register} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Read} />
          <PrivateRoute path="/create" exact component={Create} />
          <PrivateRoute path="/update/:id" exact component={Update} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

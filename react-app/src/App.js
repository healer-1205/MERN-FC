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
import Read from "./pages/Read";
import Create from "./pages/Create";
import Update from "./pages/Update";

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
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/create" exact component={Create} />
          <Route path="/update/:id" exact component={Update} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

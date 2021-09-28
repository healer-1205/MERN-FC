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
import Dashboard from "./components/dashboard/dashboard"; //
import Read from "./components/pages/Read";
import Create from "./components/pages/Create";
import Update from "./components/pages/Update";
// import { Dashboard } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

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
        <div id="_background">
          <Route path="/dashboard" exact component={(props) => <Dashboard {...props} />} />
        </div>
        <Route exact path="/login" component={(props) => <Login {...props} />} />
        <Route path="/register" exact component={(props) => <Register {...props} />} />
        <Switch>
          <PrivateRoute exact path="/read" component={(props) => <Read {...props} />} />
          <PrivateRoute path="/create" exact component={Create} />
          <PrivateRoute path="/update/:id" exact component={(props) => <Update {...props} />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

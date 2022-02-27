import React, { useEffect, useState } from "react";
import Homepage from "./pages/Hompage/Homepage";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { connect } from "react-redux";
import { checkLogin } from "./redux/action/authAction";
function App({ isLoggedIn, checkLogin }) {
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      checkLogin();
    }
  }, [window.localStorage.getItem("token")]);

  console.log(isLoggedIn);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <>
            {" "}
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
          </>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, { checkLogin })(App);

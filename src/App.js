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
function App({ isLoggedIn }) {
  console.log(isLoggedIn);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setCheck(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(App);

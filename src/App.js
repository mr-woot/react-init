import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router";
import { connect } from "react-redux";

import NotFoundPage from "./containers/pages/not_found";
import Home from "./containers/home/home";
import Register from "./containers/auth/register";
import Login from "./containers/auth/login";
import Dashboard from "./containers/dashboard/dashboard";
import RequireAuth from "./containers/auth/require_auth";

@withRouter
@connect(store => {
  return {
    user: store.user
  };
})
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/login"
            render={routeProps => {
              return this.props.user.userType === "AUTH_USER" ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login {...routeProps} />
              );
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={routeProps => {
              return <Dashboard {...routeProps} />;
            }}
          />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

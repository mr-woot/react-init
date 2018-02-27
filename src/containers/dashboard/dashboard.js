import React from "react";
import { connect } from "react-redux";
import { logout } from "./../../_actions/auth_actions";

@connect(store => {
  return {
    user: store.user
  };
})
export default class Dashboard extends React.Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(logout());
  };
  render() {
    const { userType } = this.props.user;
    console.log(this.props);
    return (
      <div>
        <div>Dashboard</div>
        {userType === "AUTH_USER" && (
          <button type="button" onClick={this.handleLogout}>
            Logout
          </button>
        )}
      </div>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
import { login } from "./../../_actions/auth_actions";

@connect(store => {
  return {
    login: store.login
  };
})
export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.dispatch(login({ username, password }));
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        username:{" "}
        <input onChange={this.handleChange} name="username" type="text" />
        password:{" "}
        <input onChange={this.handleChange} name="password" type="text" />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

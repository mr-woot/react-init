import axios from "axios";
import * as apiEndpoints from "../constants/apiEndpoints";
import { errorHandler } from "../_helpers/errorHandler";
import * as config from "./../constants/config";

export function setUser(userType) {
  return {
    type: "SET_USER",
    payload: userType
  };
}

export function login(payload) {
  return dispatch => {
    return dispatch({
      type: "LOGIN",
      payload: axios.post(apiEndpoints.login, payload)
    })
      .then(response => {
        const { token } = response.value.data.result;
        localStorage.setItem("token", token);
        dispatch(setUser("AUTH_USER"));
        // window.location.href = "/dashboard";
      })
      .catch(err => {
        errorHandler(dispatch, err, "LOGIN");
      });
  };
}

export function register(payload) {
  return dispatch => {
    return dispatch({
      type: "REGISTER",
      payload: axios.post(apiEndpoints.register, payload)
    })
      .then(response => {
        dispatch(setUser("UNAUTH_USER"));
        window.location.href = "/login";
      })
      .catch(err => {
        errorHandler(dispatch, err, "REGISTER");
      });
  };
}

export function logout() {
  return dispatch => {
    dispatch(setUser("UNAUTH_USER"));
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
}

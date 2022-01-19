import axios from "axios";
import { SERVICES } from "../../configs";
import { setLoginAuth } from "../../utils/authServices";

export const fetchLogin = (payload) => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest());
    axios
      .post(`${SERVICES.LOGIN}`, payload)
      .then((response) => {
        const login = response.data;
        setLoginAuth(login.token);
        dispatch(fetchLoginSuccess(login));
        window.location.reload();
      })
      .catch((error) => {
        if (
          error.message !==
          `Cannot read properties of undefined (reading 'token')`
        ) {
          dispatch(fetchLoginFailure(error.message));
        }
      });
  };
};

export const fetchLoginRequest = () => {
  return {
    type: "FETCH_LOGIN_REQUEST",
  };
};

export const fetchLoginSuccess = (login) => {
  return {
    type: "FETCH_LOGIN_SUCCESS",
    payload: login,
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: "FETCH_LOGIN_FAILURE",
    payload: error,
  };
};

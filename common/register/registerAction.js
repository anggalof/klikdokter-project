import { SERVICES } from "../../configs";
import axios from "axios";

export const fetchRegister = (payload) => {
  return async (dispatch) => {
    dispatch(fetchRegisterRequest());
    axios
      .post(`${SERVICES.REGISTER}`, payload)
      .then((response) => {
        const products = response.data;
        dispatch(fetchRegisterSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchRegisterFailure(error.message));
      });
  };
};

export const fetchRegisterRequest = () => {
  return {
    type: "FETCH_REGISTER_REQUEST",
  };
};

export const fetchRegisterSuccess = (register) => {
  return {
    type: "FETCH_REGISTER_SUCCESS",
    payload: register,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: "FETCH_REGISTER_FAILURE",
    payload: error,
  };
};

import { SERVICES } from "../../configs";
import { getLoginAuth } from "../../utils/authServices";
import axios from "axios";

export const fetchAddProduct = (payload) => {
  return async (dispatch) => {
    dispatch(fetchAddProductRequest());
    axios
      .post(`${SERVICES.ADD_PRODUCTS}`, payload, {
        headers: {
          Authorization: `Bearer ${getLoginAuth()}`,
        },
      })
      .then((response) => {
        const products = response.data;
        dispatch(fetchAddProductSuccess(products));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(fetchAddProductFailure(error.message));
      });
  };
};

export const fetchAddProductRequest = () => {
  return {
    type: "FETCH_ADD_PRODUCT_REQUEST",
  };
};

export const fetchAddProductSuccess = (addProduct) => {
  return {
    type: "FETCH_ADD_PRODUCT_SUCCESS",
    payload: addProduct,
  };
};

export const fetchAddProductFailure = (error) => {
  return {
    type: "FETCH_ADD_PRODUCT_FAILURE",
    payload: error,
  };
};

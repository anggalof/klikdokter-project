import axios from "axios";
import { SERVICES } from "../../configs";
import { getLoginAuth } from "../../utils/authServices";

export const fetchDeleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(fetchDeleteProductRequest());
    axios
      .post(`${SERVICES.DELETE_PRODUCTS}/${id}`, {
        headers: {
          Authorization: `Bearer ${getLoginAuth()}`,
        },
      })
      .then((response) => {
        const products = response.data;
        dispatch(fetchDeleteProductSuccess(products));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(fetchDeleteProductFailure(error.message));
      });
  };
};

export const fetchDeleteProductRequest = () => {
  return {
    type: "FETCH_DELETE_PRODUCT_REQUEST",
  };
};

export const fetchDeleteProductSuccess = (deleteProduct) => {
  return {
    type: "FETCH_DELETE_PRODUCT_SUCCESS",
    payload: deleteProduct,
  };
};

export const fetchDeleteProductFailure = (error) => {
  return {
    type: "FETCH_DELETE_PRODUCT_FAILURE",
    payload: error,
  };
};

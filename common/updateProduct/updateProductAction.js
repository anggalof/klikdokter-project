import axios from "axios";
import { SERVICES } from "../../configs";
import { getLoginAuth } from "../../utils/authServices";

export const fetchUpdateProduct = (payload, id) => {
  return async (dispatch) => {
    dispatch(fetchUpdateProductRequest());
    axios
      .put(`${SERVICES.UPDATE_PRODUCTS}/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${getLoginAuth()}`,
        },
      })
      .then((response) => {
        const products = response.data;
        dispatch(fetchUpdateProductSuccess(products));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(fetchUpdateProductFailure(error.message));
      });
  };
};

export const fetchUpdateProductRequest = () => {
  return {
    type: "FETCH_UPDATE_PRODUCT_REQUEST",
  };
};

export const fetchUpdateProductSuccess = (updateProduct) => {
  return {
    type: "FETCH_UPDATE_PRODUCT_SUCCESS",
    payload: updateProduct,
  };
};

export const fetchUpdateProductFailure = (error) => {
  return {
    type: "FETCH_UPDATE_PRODUCT_FAILURE",
    payload: error,
  };
};

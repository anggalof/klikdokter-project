import { SERVICES } from "../../configs";
import { getLoginAuth } from "../../utils/authServices";
import axios from "axios";

export const fetchProductBySku = (payload) => {
  return async (dispatch) => {
    dispatch(fetchProductBySkuRequest());
    axios
      .post(`${SERVICES.GET_PRODUCT_LIST_BY_SKU}`, payload, {
        headers: {
          Authorization: `Bearer ${getLoginAuth()}`,
        },
      })
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductBySkuSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchProductBySkuFailure(error.message));
      });
  };
};

export const fetchProductBySkuRequest = () => {
  return {
    type: "FETCH_PRODUCT_BY_SKU_REQUEST",
  };
};

export const fetchProductBySkuSuccess = (productBySku) => {
  return {
    type: "FETCH_PRODUCT_BY_SKU_SUCCESS",
    payload: productBySku,
  };
};

export const fetchProductBySkuFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_BY_SKU_FAILURE",
    payload: error,
  };
};

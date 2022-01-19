const BASE_URL = "https://hoodwink.medkomtek.net";

const services = {
  REGISTER: BASE_URL + "/api/register",
  LOGIN: BASE_URL + "/api/auth/login",
  ADD_PRODUCTS: BASE_URL + "/api/item/add",
  UPDATE_PRODUCTS: BASE_URL + "/api/item/update",
  DELETE_PRODUCTS: BASE_URL + "/api/item/delete",
  GET_PRODUCT_LIST: BASE_URL + "/api/items",
  GET_PRODUCT_LIST_BY_SKU: BASE_URL + "/api/item/search",
};

export default services;

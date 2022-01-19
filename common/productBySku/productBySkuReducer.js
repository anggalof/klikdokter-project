const initialState = {
  loading: false,
  productBySku: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_BY_SKU_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_PRODUCT_BY_SKU_SUCCESS":
      return {
        loading: false,
        productBySku: action.payload,
        error: "",
      };
    case "FETCH_PRODUCT_BY_SKU_FAILURE":
      return {
        loading: false,
        productBySku: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

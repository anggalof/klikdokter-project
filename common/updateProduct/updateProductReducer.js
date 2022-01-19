const initialState = {
  loading: false,
  updateProduct: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_UPDATE_PRODUCT_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_UPDATE_PRODUCT_SUCCESS":
      return {
        loading: false,
        updateProduct: action.payload,
        error: "",
      };
    case "FETCH_UPDATE_PRODUCT_FAILURE":
      return {
        loading: false,
        updateProduct: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

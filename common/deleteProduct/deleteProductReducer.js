const initialState = {
  loading: false,
  deleteProduct: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DELETE_PRODUCT_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_DELETE_PRODUCT_SUCCESS":
      return {
        loading: false,
        deleteProduct: action.payload,
        error: "",
      };
    case "FETCH_DELETE_PRODUCT_FAILURE":
      return {
        loading: false,
        deleteProduct: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

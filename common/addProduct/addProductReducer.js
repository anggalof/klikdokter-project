const initialState = {
  loading: false,
  addProduct: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ADD_PRODUCT_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_ADD_PRODUCT_SUCCESS":
      return {
        loading: false,
        addProduct: action.payload,
        error: "",
      };
    case "FETCH_ADD_PRODUCT_FAILURE":
      return {
        loading: false,
        addProduct: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

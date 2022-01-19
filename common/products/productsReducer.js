const initialState = {
  loading: false,
  products: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        loading: false,
        stories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

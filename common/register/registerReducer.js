const initialState = {
  loading: false,
  register: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_REGISTER_SUCCESS":
      return {
        loading: false,
        register: action.payload,
        error: "",
      };
    case "FETCH_REGISTER_FAILURE":
      return {
        loading: false,
        register: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

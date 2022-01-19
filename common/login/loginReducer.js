const initialState = {
  loading: false,
  login: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_LOGIN_SUCCESS":
      return {
        loading: false,
        login: action.payload,
        error: "",
      };
    case "FETCH_LOGIN_FAILURE":
      return {
        loading: false,
        login: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

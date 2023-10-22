const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOADED":
      console.log("loading user...")
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        data: payload,
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      console.log("login success... token being added")
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: true,
      };
    case "LOGOUT_USER":
    case "LOGIN_FAIL":
      console.log("Login failed removing token...")
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        data: null,
        isAuthenticated: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default UserReducer;

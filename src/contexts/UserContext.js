import { createContext, useReducer } from "react";

import axios from "axios";

import setAuthToken from "../setAuthToken";

import UserReducer from "./UserReducer";

// initial state
const initialState = {
  token: localStorage.getItem("token"),
  isLoading: true,
  isAuthenticated: false,
  data: null,
};

// Creates the context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, initialState);

  // Actions
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("https://pppac-backend.onrender.com/api/auth");

      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const login = async (email, password) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("https://pppac-backend.onrender.com/api/auth", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      console.error(err);
    }
  };

  // Register
  const register = async (email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    try {
      const res = await axios.post("https://pppac-backend.onrender.com/api/users", body, config);

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      console.error(err);
    }
  };

  // Logout user
  const logout = async () => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        loadUser,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

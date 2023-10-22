import { createContext, useReducer } from "react";

// UUID
import { v4 as uuid } from "uuid";

import AlertReducer from "./AlertReducer";

// initial state
const initialState = [];

// Creates the context
export const AlertContext = createContext(initialState);

// Provider Component
export const AlertProvider = ({ children }) => {
  const [alerts, dispatch] = useReducer(AlertReducer, initialState);

  // Actions
  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid();
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type, id },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
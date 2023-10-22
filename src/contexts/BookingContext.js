import { createContext, useReducer, useContext } from "react";

import axios from "axios";

import BookingReducer from "./BookingReducer";


// Context
import { AlertContext } from "./AlertContext";

// initial state
const initialState = { loading: true, booked: [] };

// Creates the context
export const BookingContext = createContext(initialState);

// Provider Component
export const BookingProvider = ({ children }) => {
  const [booking, dispatch] = useReducer(BookingReducer, initialState);
  const {setAlert} = useContext(AlertContext);

  // Actions
  const bookCruise = async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(data);

      const res = await axios.post("https://pppac-backend.onrender.com/api/booking", body, config);

      dispatch({
        type: "BOOK_CRUISE",
        payload: res.data,
      });

      setAlert("You're cruise request has been submitted and is awaiting approval!", "success")
    } catch (err) {
      console.error(err.message);
      setAlert("You must fill out all fields and select a date before booking", "error")
    }
  };

  const getBooked = async () => {
    console.log("getting booked cruises");
    try {
      const booked = await axios.get("https://pppac-backend.onrender.com/api/booking");

      if (booked.data) {
        dispatch({ type: "LOAD_BOOKED", payload: booked.data });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const accept = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ id });

      const res = await axios.post("https://pppac-backend.onrender.com/api/booking/approve", body, config);

      dispatch({ type: "ACCEPT_CRUISE", payload: res.data });
    } catch (err) {
      console.error(err.message);
    }
  };

  const deny = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ id });

      const res = await axios.post("https://pppac-backend.onrender.com/api/booking/deny", body, config);

      dispatch({ type: "DENY_CRUISE", payload: res.data });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <BookingContext.Provider
      value={{ booking, bookCruise, getBooked, accept, deny }}
    >
      {children}
    </BookingContext.Provider>
  );
};

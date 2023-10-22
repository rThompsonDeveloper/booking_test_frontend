import { createContext, useReducer } from "react";

import axios from "axios";

import ReviewReducer from "./ReviewReducer";
import { useContext } from "react";
import { AlertContext } from "./AlertContext";

// initial state
const initialState = { loading: true, reviews: [] };

// Creates the context
export const ReviewContext = createContext(initialState);

// Provider Component
export const ReviewProvider = ({ children }) => {
  const [reviews, dispatch] = useReducer(ReviewReducer, initialState);
  const {setAlert} = useContext(AlertContext);

  // Actions
  const addReview = async ({ photo, name, message }) => {
    try {
      const data = new FormData();
      data.append("userImage", photo);
      data.append("name", name);
      data.append("message", message);

      const review = await axios.post("https://pppac-backend.onrender.com/api/reviews", data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      });

      dispatch({
        type: "ADD_REVIEW",
        payload: review.data,
      });

      setAlert("Review Sent Successfully!", "success");

    } catch (err) {
      console.error(err.message);
      setAlert("Error Sending Review, please fill out all fields or try again later");
    }
  };

  const getReviews = async () => {
    console.log("getting reviews");
    try {
      const reviews = await axios.get("https://pppac-backend.onrender.com/api/reviews");

      if (reviews.data) {
        dispatch({ type: "LOAD_REVIEWS", payload: reviews.data });
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

      const res = await axios.post("https://pppac-backend.onrender.com/api/reviews/approve", body, config);

      dispatch({ type: "ACCEPT_REVIEW", payload: res.data });
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

      const res = await axios.post("https://pppac-backend.onrender.com/api/review/deny", body, config);

      dispatch({ type: "DENY_REVIEW", payload: res.data });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, getReviews, addReview, accept, deny }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

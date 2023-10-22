import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// CONTEXTS
import { BookingProvider } from "./contexts/BookingContext";
import { ReviewProvider } from "./contexts/ReviewContext";
import { UserProvider } from "./contexts/UserContext";
import { AlertProvider } from "./contexts/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertProvider>
    <UserProvider>
      <BookingProvider>
        <ReviewProvider>
          <App />
        </ReviewProvider>
      </BookingProvider>
    </UserProvider>
    </AlertProvider>
  </React.StrictMode>
);

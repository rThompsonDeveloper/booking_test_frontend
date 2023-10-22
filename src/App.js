import { useEffect, useContext } from "react";

// components
import Header from "./components/header";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import { BookingContext } from "./contexts/BookingContext";
import { ReviewContext } from "./contexts/ReviewContext";
import { UserContext } from "./contexts/UserContext";

// Auth Token
import setAuthToken from "./setAuthToken";

// Components
import Auth from "./components/auth";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";

// checks to see if user is logged in
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const { getBooked } = useContext(BookingContext);
  const { getReviews } = useContext(ReviewContext);
  const { loadUser, user } = useContext(UserContext);
  useEffect(() => {
    // Load booked cruises
    // eslint-disable-next-line
    getBooked();
    // eslint-disable-next-line
    getReviews();
    loadUser();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Auth />} />
        <Route
          path="/dashboard"
          element={user.isAuthenticated ? <Dashboard /> : <Auth />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

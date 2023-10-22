const BookingReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "BOOK_CRUISE":
      return { ...state, loading: false, booked: [...state.booked, payload] };
    case "LOAD_BOOKED":
      return { ...state, loading: false, booked: payload };
    case "ACCEPT_CRUISE":
    case "DENY_CRUISE":
      return {
        ...state,
        booked: [...state.booked.filter((booking) => booking._id !== payload)],
      };
    default:
      return state;
  }
};

export default BookingReducer;

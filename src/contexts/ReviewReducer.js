const ReviewReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_REVIEW":
      return { ...state, loading: false, reviews: [...state.reviews, payload] };
    case "LOAD_REVIEWS":
      return { ...state, loading: false, reviews: payload };
    case "ACCEPT_REVIEW":
    case "DENY_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews.filter((review) => review._id !== payload)],
      };
    default:
      return state;
  }
};

export default ReviewReducer;

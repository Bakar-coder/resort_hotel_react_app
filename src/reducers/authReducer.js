const authState = {
  isAuthenticated: false,
  user: {}
};

export default (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state
  }
}
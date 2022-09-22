const initialState = {
  value: 0,
};

const countReducer = (state = initialState.value, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state !== 0 ? state - 1 : 0;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };
  export default countReducer;
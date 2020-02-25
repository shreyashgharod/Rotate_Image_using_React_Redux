const initialState = {
  rotating: true
};

const rotateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rotate":
      return {
        rotating: action.payload
      };
    default:
      return state;
  }
};

export default rotateReducer;

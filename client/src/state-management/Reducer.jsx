const Reducer = (state, action) => {
  switch (action.type) {
    case 'TEST 1':
      return {
        ...state,
        test: action.payload
      };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
  }
}

export default Reducer;
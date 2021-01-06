const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRIP_INFO':
      return {
        ...state,
        tripInfo: action.payload
      };
      case 'TEST 2':
        return {
          ...state,
          test2: action.payload
        }
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
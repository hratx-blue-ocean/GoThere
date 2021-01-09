const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_TRIP_INFO':
			return {
				...state,
				tripInfo: action.payload,
			};
		case 'ADD_TRIP':
			return {
				...state,
				trips: action.payload,
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload,
			};

		case 'SET_USER':
			return {
				...state,
				userID: action.payload,
			};
		case 'SET_USER_EMAIL':
			return {
				...state,
				email: action.payload,
			};

			case 'SET_SAVED_ATTRACTION':
				return {
					...state,
					tripInfo: action.payload,
				};

		default:
			return state;
	}
};

export default Reducer;

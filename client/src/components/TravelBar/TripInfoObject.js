const TripInfoObject = {
	id: null,
	valid: false,
	//default location
	location: "Austin, TX",
	city: undefined,
	state: undefined,
	address: undefined,
	zip: undefined,
	filter: {rating: undefined, price: undefined},
	startDate: undefined,
	endDate: undefined,
	type: undefined,
	savedHotel: [],
	savedRestaurant: [],
	savedShopping: [],
	savedBar: []
};
export default TripInfoObject;

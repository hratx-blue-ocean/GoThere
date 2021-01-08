import axios from 'axios';

const fetchSavedTrips = (userId) => {
  //on sign in
  //on updating saved trips

}
const updateSavedTrip = (userId, tripId) => {
  // travel page
}

//travel page
const saveTrip = (tripData, userId) => {
  const options = {
    method: 'POST',
    url: '/trips',
    body: {tripData: tripData}
  }
  return axios.request(options)
}
//lower priority calls
const addFavorite = () => {
  //travel page
}
const updateFavorite = () => {
  //travel page and user page
}
const fetchFavorites = () => {
  //sign in and updated
}
export {
  fetchSavedTrips,
  updateSavedTrip,
  saveTrip,
  addFavorite,
  updateFavorite,
  fetchFavorites
}
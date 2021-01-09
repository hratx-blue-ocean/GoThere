import React, { useContext, useState } from "react";
import moment from "moment";
import { Context } from "../../state-management/Store";
import { Card, List } from "antd";

const today = moment().format("YYYY-MM-DD").toString();
console.log(today);

const TripInfoObject = {
  id: null,
  valid: false,
  location: undefined,
  city: undefined,
  state: undefined,
  address: undefined,
  zip: undefined,
  startDate: undefined,
  endDate: undefined,
  type: undefined,
  attractions: [],
};

const newTrip = [
  {
    id: 12345,
    valid: true,
    location: {
      city: "Memphis",
      state: "TN",
      adress: undefined,
      zip: undefined,
    },
    startDate: "2021-01-15",
    endDate: "2021-01-20",
    type: "business",
  },
  {
    id: 6789,
    valid: true,
    location: {
      city: "Tampa",
      state: "FL",
      adress: undefined,
      zip: undefined,
    },
    startDate: "2021-01-01",
    endDate: "2021-01-03",
    type: "personal",
  },
];

const UpcomingTrips = () => {
  const [state, dispatch] = useContext(Context);
  const [userTrips, updateTrip] = useState(newTrip); // use as temp state, switch to global store

  // if there are no saved trips, the component will not render
  // if (state.TripInfoObject.location === undefined) {
  //   return null;
  // }

  return (
    <>
      <h2>Upcoming Trips</h2>
      {state.trips
        .filter((current) => current.startDate >= "2021-01-07") //TODO use the current date #hardcoded
        .map((trip) => {
          return (
            <Card
              // style={{ maxWidth: "50%" }}
              title={trip.location}
              extra={<a href="/home">Update Trip</a>} // get page to load with TripInfoObject data filled into the circles
            >
              <List size="small">
                <List.Item>Location: {trip.location}</List.Item>
                <List.Item>Arrival Date: {trip.startDate}</List.Item>
                <List.Item>Departure Date: {trip.endDate}</List.Item>
                <List.Item>Hotel: </List.Item>
              </List>
            </Card>
          );
        })}
    </>
  );
};

export default UpcomingTrips;

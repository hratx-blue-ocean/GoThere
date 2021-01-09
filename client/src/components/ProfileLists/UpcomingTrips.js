import React, { useContext, useState } from "react";
import moment from "moment";
import { Context } from "../../state-management/Store";
import { Card, List } from "antd";

const today = moment().format("YYYY-MM-DD").toString();

const UpcomingTrips = () => {
  const [state, dispatch] = useContext(Context);

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
            >
              <List size="small">
                <List.Item>Location: {trip.location}</List.Item>
                <List.Item>Arrival Date: {trip.startDate}</List.Item>
                <List.Item>Departure Date: {trip.endDate}</List.Item>
              </List>
            </Card>
          );
        })}
    </>
  );
};

export default UpcomingTrips;

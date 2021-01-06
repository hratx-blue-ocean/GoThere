import React, { useState } from 'react';
import { Alert } from 'antd';
import moment from 'moment';
import "./userPage.css";
import dummyTrips from "../../dummy-data/dummyTripsArray";
import UserCalendar from "../../components/Calendar/calendar.js";
import UpcomingTrips from "../../components/ProfileLists/UpcomingTrips.js";
import Favorites from "../../components/ProfileLists/Favorites.js";
import PastTrips from "../../components/ProfileLists/PastTrips";

export default function UserPage() {

  //alert data for upcoming trip and weather
  const today = moment();
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  //find the next coming trip, where startDate is within 7 days of today
  function isNext(trips){
      if (parseInt(trips.startDate.slice(8)) >= today.date() && parseInt(trips.startDate.slice(8)) <= today.date() + 7) {
        return trips;
      }
    }

  const nextTrip = dummyTrips.find(isNext);
  const weather = 'Sunny, 52 degrees';
  const tripMessage = nextTrip ? (`You have a trip in the next few days to ${nextTrip.location} on ${nextTrip.startDate}, the weather will be a ${weather}`) : null;

  return (
    <>
    <div className='eminent trip'>
      {visible && nextTrip !== undefined ? (
        <Alert
          message={tripMessage}
          type="info"
          closable
          afterClose={handleClose}
        />
      ) : null}
    </div>
    <div className="userPage">
      <div className="calendar">
        <UserCalendar />
      </div>
      <div className="usertabs">
        <UpcomingTrips />
        <Favorites />
        <PastTrips />
      </div>
    </div>
    </>
  );
}

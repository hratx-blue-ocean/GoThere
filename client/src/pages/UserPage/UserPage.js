import React, { useState } from 'react';
import { Alert } from 'antd';
import "./userPage.css";
import UserCalendar from "../../components/Calendar/calendar.js";
import UpcomingTrips from "../../components/ProfileLists/UpcomingTrips.js";
import Favorites from "../../components/ProfileLists/Favorites.js";
import PastTrips from "../../components/ProfileLists/PastTrips";

export default function UserPage() {

  const trip = {
    location: "Jot 'Em Down, TX",
    startDate: "01-09-2021",
    weather: "Sunny, 52 degrees"
  }

  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  const tripMessage = `You have a trip in the next few days to ${trip.location} on ${trip.startDate}, the weather will be a ${trip.weather}`

  return (
    <>
    <div className='eminent trip'>
      {visible ? (
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

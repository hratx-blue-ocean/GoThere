import React, { useState } from 'react';
import { Alert } from 'antd';
import "./userPage.css";
import UserCalendar from "../../components/Calendar/calendar.js";
import UpcomingTrips from "../../components/ProfileLists/UpcomingTrips.js";
import Favorites from "../../components/ProfileLists/Favorites.js";
import PastTrips from "../../components/ProfileLists/PastTrips";

export default function UserPage() {

  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
    <div className='eminent trip'>
      {visible ? (
        <Alert
          message="You have a trip soon!"
          type="info"
          closable afterClose={handleClose}
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

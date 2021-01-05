import React from "react";
import "./userPage.css";
import UserCalendar from "../../components/Calendar/calendar.js";
import UpcomingTrips from "../../components/ProfileLists/UpcomingTrips.js";
import Favorites from "../../components/ProfileLists/Favorites.js";
import PastTrips from "../../components/ProfileLists/PastTrips";

export default function UserPage() {
  return (
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
  );
}

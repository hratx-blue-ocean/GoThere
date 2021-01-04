import React from 'react';
import './userPage.css';
import UserCalendar from '../../components/Calendar/calendar.js';
import TabsCard from '../../components/TabsCard.js';
import Favorites from '../../components/Favorites.js';
import PastTrips from '../../components/PastTrips';

export default function UserPage() {
  return (
    <div className="userPage">
      <div className="calendar">
        <UserCalendar/>
      </div>
      <div className="usertabs">
        <TabsCard/>
        <Favorites/>
        <PastTrips/>
      </div>
    </div>
  );
}
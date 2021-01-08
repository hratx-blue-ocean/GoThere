import React, { useState } from 'react';
import { Alert, PageHeader } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';
import "./userPage.css";
import { WEATHER_API_KEY } from '../../API.js';
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
  //weather info for message
  const weatherCity = nextTrip.location.slice(0, nextTrip.location.indexOf(','));

  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: {q: 'austin, us', units: 'imperial'},
    headers: {
      // 'x-rapidapi-key': {APIKEY},
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
  };
  const fetchedWeather = '';
  // const fetchedWeather = (axios.request(options)
  //   .then(function (response) {
  //   return `a ${response.data.list[0].main.temp} ${response.data[0].main.temp}${u00B0}F and a ${response.data.list[1].main.temp}${u00B0}F ${response.data[1].main.temp}`;
  // })
    // .catch(function (error) {
  //   console.error(error);
  // }));

  const weather = nextTrip ? fetchedWeather : 'no weather data';
  //message populating alert
  const tripMessage = nextTrip ? (`You have a trip in the next few days to ${nextTrip.location} on ${nextTrip.startDate.slice(5)}, the weather will be ${weather} for the first few days`) : null;

  //welcome user profile headers
  let username = 'Slarti Bartfast';
  const welcomeMessage = `Welcome ${username}!`;
  //user avatar
  const colorScheme = ['teal', 'olive', 'purple', 'orange'];
  const avatarColor = colorScheme[Math.floor(Math.random() * colorScheme.length)];

  return (
    <>
    <PageHeader
      avatar={{size:"large", icon:<SmileTwoTone spin twoToneColor={avatarColor}/>}}
      title={welcomeMessage}
      subTitle="here are your upcoming trips and favorite places!"
    />
    <div className='eminent trip'>
      {visible && nextTrip !== undefined
      ? (<Alert
          message={tripMessage}
          type="info"
          closable
          afterClose={handleClose}
        />)
      : null}
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

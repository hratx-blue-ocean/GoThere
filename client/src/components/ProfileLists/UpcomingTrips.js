import React, { useContext, useState } from "react";
import { Context } from "../../state-management/Store";

import { Card, List } from "antd";

const tabList = [
  {
    key: "Seattle",
    tab: "Seattle",
  },
  {
    key: "Orlando",
    tab: "Orlando",
  },
];

const data = [
  "Date: 12 Jan - 15 Jan 2021",
  "Hotel: Marriot City Center",
  "Weather: Sunny 84",
  "Attractions: Escape Room",
];

const contentList = {
  Seattle: (
    <List
      size="small"
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
  Orlando: (
    <List
      size="small"
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
};

const UpcomingTrips = () => {
  const [state, dispatch] = useContext(Context);
  const [userTrips, updateTrip] = useState("blank");
  const [tabKey, setTabKey] = useState("Seattle");

  const onTabChange = (key, type) => {
    console.log(state.tripInfo);
    updateTrip("example trip data"); // updates local trip state
    console.log(userTrips);
    dispatch({ type: "tripInfo", payload: "UPDATE STORE" }); // how to update Store tripInfo state?
    console.log(state.tripInfo);
    setTabKey(key);
  };

  return (
    <>
      <Card
        className="profileCard"
        title="Upcoming Trips"
        tabList={tabList}
        activeTabKey={tabKey}
        onTabChange={(key) => {
          onTabChange(key, "key");
        }}
      >
        {contentList[tabKey]}
      </Card>
    </>
  );
};

export default UpcomingTrips;

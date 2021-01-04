import React from "react";
import TabsCard from "../../components/TabsCard";
import Favorites from "../../components/Favorites";
import PastTrips from "../../components/PastTrips";

export default function Dashboard() {
  return (
    <React.Fragment>
      <h2>Dashboard (placeholder)</h2>
      <TabsCard />
      <Favorites />
      <PastTrips />
    </React.Fragment>
  );
}

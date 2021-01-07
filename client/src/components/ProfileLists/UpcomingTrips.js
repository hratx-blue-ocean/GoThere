import React from "react";
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

// const data = [{
//   Date: "12 Jan - 15 Jan 2021",
//   Hotel: "Marriot City Center",
//   Weather: "Sunny 84",
//   Attractions: "Escape Room",
// }];

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

class UpcomingTrips extends React.Component {
  state = {
    key: "Seattle",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
        <Card
          className="profileCard"
          title="Upcoming Trips"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => {
            this.onTabChange(key, "key");
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </>
    );
  }
}

export default UpcomingTrips;

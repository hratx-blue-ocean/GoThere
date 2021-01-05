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
  "Date: 12 Dec - 22 Dec 2020",
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
  Orlando: <p>content2</p>,
};

class PastTrips extends React.Component {
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
          style={{ maxWidth: "50%" }}
          title="Past Trips"
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

export default PastTrips;

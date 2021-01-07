import React from "react";
import { Card, List } from "antd";

const tabList = [
  {
    key: "Hotels",
    tab: "Hotels",
  },
  {
    key: "Restaurants",
    tab: "Restaurants",
  },
];

const data = [
  "Holiday Inn Express, Austin TX",
  "Marriot City Center, Seattle WA",
  "Comfort Inn, Orlando FL",
];

const contentList = {
  Hotels: (
    <List
      size="small"
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
  Restaurants: <p>content2</p>,
};

class Favorites extends React.Component {
  state = {
    key: "Hotels",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
        <h2 style={{ marginTop: "1em" }}>Favorites</h2>
        <Card
          className="profileCard"
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

export default Favorites;

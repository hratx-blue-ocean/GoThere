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
  {
    key: "Bars",
    tab: "Bars",
  },
  {
    key: "Shopping",
    tab: "Shopping",
  },
];

const favoriteHotels = [
  "Hotel San Jose, Austin TX",
  "Marriot City Center, Seattle WA",
  "Comfort Inn, Orlando FL",
];

const favoriteRestaurants = [
  "Bird Bird Biscuit, Austin TX",
  "Cafe Munir, Seattle WA",
  "Se7en Bites, Orlando FL",
];

const favoriteBars = [
  "Edge Rooftop + Bar, Austin TX",
  "Tanks, Seattle WA",
  "Whollotta Colada, Orlando FL",
];

const favoriteShopping = [
  "Hill Country Galleria, Austin TX",
  "Oceanside Marina, Seattle WA",
  "Greenhill Outlets, Orlando FL",
];

const contentList = {
  Hotels: (
    <List
      size="small"
      dataSource={favoriteHotels}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
  Restaurants: (
    <List
      size="small"
      dataSource={favoriteRestaurants}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
  Bars: (
    <List
      size="small"
      dataSource={favoriteBars}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
  Shopping: (
    <List
      size="small"
      dataSource={favoriteShopping}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  ),
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

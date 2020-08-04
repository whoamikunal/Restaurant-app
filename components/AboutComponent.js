import React, { Component } from "react";
import { Text, ScrollView, View, FlatList, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { HISTORY } from "../constants/constants";
import { LEADERS } from "../shared/leaders";

const RenderItem = (props) => {
  const item = props.item;

  if (item != null) {
    return (
      <Card title={item.title}>
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
};

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS,
      history: HISTORY,
    };
  }
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: require("../components/images/alberto.png") }}
        />
      );
    };

    return (
      <ScrollView>
        <RenderItem item={this.state.history}></RenderItem>
        <FlatList
          style={styles.flatList}
          data={this.state.leaders}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    margin: 17,
  },
});

export default About;

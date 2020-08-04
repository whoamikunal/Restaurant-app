import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { address } from "../constants/constants";

const RenderText = (props) => {
  const address = props.address;
  return <Text style={{ fontWeight: "bold", fontSize: 20 }}>{address}</Text>;
};

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: address,
    };
  }

  static navigationOptions = {
    title: "Contact",
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <Card title="Contact Information">
          <RenderText address={this.state.address} />
        </Card>
      </View>
    );
  }
}

export default Contact;

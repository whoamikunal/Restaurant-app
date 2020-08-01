import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { address } from "../constants/address";


const RenderText = (props) => {
    const address  = props.address;

    return (<Text style={{fontWeight: "bold", fontSize: 20}}>{address}</Text>);
    
    
}

export class Contact extends Component {
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
          <RenderText address={address} />
        </Card>
      </View>
    );
  }
}

export default Contact;

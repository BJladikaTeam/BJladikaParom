import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Icon2 from "react-native-vector-icons/FontAwesome5";

import image1 from "../images/dulurface.png";
import image2 from "../images/ship.png";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  mainContainer: {
    width,
  },
  paddings: {
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 50,
    backgroundColor: "#FAEBD7",
    padding: 20,
  },
  text_title: {
    fontSize: 16,
    marginStart: 10,
  },
  text_author: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 16,
  },
  image_round: {
    width: 40,
    height: 40,
    //Below lines will help to set the border radius
    borderRadius: 50,
    overflow: "hidden",
  },
  image_and_text_row: {
    flexDirection: "row",
    width: "77.5%",
  },
});

//const image1 = { uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png" };

const randomArrayImage = [image1, image2];
const randomIndex = () => {
  const rand = Math.floor(Math.random() * 2);
  return rand;
};

const PassengerListItem = ({
  navigation,
  title,
  body,
  date,
  author_key,
  type,
}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        console.log("Pressed");
      }}
    >
      <View style={styles.paddings}>
        <View style={styles.image_and_text_row}>
          <ImageBackground source={image1} style={styles.image_round} />
          <Text numberOfLines={1} style={styles.text_title}>
            Пассажир ФИО
          </Text>
          <Icon2 name="check" size={30} style={{marginStart: 100}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PassengerListItem;

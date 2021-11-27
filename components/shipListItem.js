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

import image1 from "../images/ferry.png";
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
    fontSize: 24,
  },
  text_author: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 16,
  },
  image_round: {
    width: 80,
    height: 80,
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

const ShipListItem = ({ navigation, title, body, date, author_key, type }) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        console.log({ body });
        navigation.push("MegaMind");
      }}
    >
      <View style={styles.paddings}>
        <View style={styles.image_and_text_row}>
          {type == 1 ? (
            <ImageBackground source={image1} style={styles.image_round} />
          ) : null}
          {type == 2 ? (
            <ImageBackground source={image2} style={styles.image_round} />
          ) : null}

          <View style={{ marginLeft: 10 }}>
            <Text numberOfLines={1} style={styles.text_title}>
              {title}
            </Text>

            <Text style={styles.text_author}>{date}</Text>
          </View>
        </View>

        <Text numberOfLines={3} style={{ marginTop: 8 }}>
          {body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShipListItem;

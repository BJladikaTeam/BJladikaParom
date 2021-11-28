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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Fontisto";

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
    borderRadius: 40,
    backgroundColor: "#FAEBD7",
    padding: 20,
  },
  text_title: {
    fontSize: 16,
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

const ShipListItem = ({
  navigation,
  way,
  type,
  type_name,
  date,
  spaces,
  taken,
}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.push("MegaMind");
      }}
    >
      <View style={styles.paddings}>
        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}>
          {way}
        </Text>

        <View style={styles.image_and_text_row}>
          {type == 1 ? (
            <ImageBackground source={image1} style={styles.image_round} />
          ) : null}
          {type == 2 ? (
            <ImageBackground source={image2} style={styles.image_round} />
          ) : null}

          <View style={{ marginLeft: 10 }}>
            <Text numberOfLines={1} style={styles.text_title}>
              {type == 1 ? <Icon3 name="sait-boat" size={20} /> : null}
              {type == 2 ? <Icon name="ferry" size={20} /> : null} {type_name}
            </Text>

            <Text style={styles.text_author}>
              Заполненность: {taken}/{spaces}
            </Text>
            <Text numberOfLines={3} style={{ marginTop: 8 }}>
              {date}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.tch_opacity_logout,
            {
              backgroundColor: "lightblue",
              marginTop: 125,
              alignSelf: "center",
              width: "50%",
              height: 30,
              position: "absolute",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          title={"Log In"}
          onPress={() => {
            navigation.push("MegaMind");
          }}
        >
          <Text style={{ fontSize: 12, color: "white" }}>Подробности</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ShipListItem;

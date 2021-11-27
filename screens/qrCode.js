import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("screen");

import image1 from "../images/qrcode.png";
import image2 from "../images/ship.png";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: width,
    height: height,
  },
  image_round: {
    width: 320,
    height: 320,
    //Below lines will help to set the border radius
    overflow: "hidden",
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
});

const QrCode = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: width,
        heigh: height,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={image1} style={styles.image_round} />
        <Text style={{ fontSize: 30 }}>Дьулуур</Text>
        <Text style={{ fontSize: 24 }}>Ваш QR Code на рейс №3245</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
};

export default QrCode;

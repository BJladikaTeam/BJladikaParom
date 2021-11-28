import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("screen");

import image1 from "../images/dulurface.png";
import image2 from "../images/ferry.png";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: width,
    height: height,
  },
  image_round_profile: {
    width: 80,
    height: 80,
    //Below lines will help to set the border radius
    borderRadius: 50,
    overflow: "hidden",
    marginTop: 60,
  },
  image_round: {
    width: 80,
    height: 80,
    //Below lines will help to set the border radius
    borderRadius: 50,
    overflow: "hidden",
  },
  paddings: {
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 50,
    backgroundColor: "#FAEBD7",
    padding: 20,
    marginTop: 10,
  },
  text_title: {
    fontSize: 12,
  },
  text_author: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 16,
  },
  mainContainer: {
    width,
  },
  image_and_text_row: {
    flexDirection: "row",
    width: "77.5%",
  },
  tch_opacity_logout: {
    marginTop: 25,
    height: 60,
    width: "50%",
    alignItems: "center",
    backgroundColor: "#A4BFCA",
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 50,
  },
});

const ProfileUser = ({ navigation }) => {
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
        <ImageBackground source={image1} style={styles.image_round_profile} />
        <Text style={{ fontSize: 30 }}>Дьулуур</Text>
        <TouchableOpacity
          style={styles.mainContainer}
          onPress={() => {
            console.log("123");
            navigation.push("QrCode");
          }}
        >
          <View style={styles.paddings}>
            <View style={styles.image_and_text_row}>
              <ImageBackground source={image2} style={styles.image_round} />

              <Text style={styles.text_author}>
                Рейс №3245: Нижний Бестях - Речной порт 30.11.2020 13:45
              </Text>
            </View>

            <Text numberOfLines={3} style={{ marginTop: 8 }}>
              Тип: Подушка | Заполненность: 3/7
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tch_opacity_logout}
          title={"Log In"}
          onPress={() => {
            navigation.push("Second");
          }}
        >
          <Text style={{ fontSize: 18, marginTop: 18, color: "white" }}>
            QR Сканер
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tch_opacity_logout,
            { backgroundColor: "#A5A6A7", marginTop: 20, width: "35%" },
          ]}
          title={"Log In"}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 18, marginTop: 18, color: "white" }}>
            Назад
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tch_opacity_logout,
            { backgroundColor: "lightblue", marginTop: 20, width: "50%" },
          ]}
          title={"Log In"}
          onPress={() => {
            navigation.push("ProfileCaptain");
          }}
        >
          <Text style={{ fontSize: 18, marginTop: 18, color: "white" }}>
            Капитанская кнопка
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileUser;

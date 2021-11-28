import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View, Dimensions, ImageBackground } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon2 from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("screen");

import image1 from "../images/ferry.png";
import image2 from "../images/ship.png";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 50
  },
});

const PageShipDetail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: width,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View style={styles.container}>
        <View
          style={{ marginTop: 10, flexDirection: "row", borderWidth: 3, borderRadius: 10 }}
        >
          <Icon2 name="clock" size={50} color="red"></Icon2>
          <View style={{marginStart: 10, marginEnd: 10}}>
            <Text>Заполнение мест: 17/44</Text>
            <Text>Статус: Отплыл</Text>
          </View>
        </View>
        <Text style={{ marginTop: 25, fontSize: 24 }}>
          Корабль: Красавчик 03659
        </Text>
        <ImageBackground
          source={image2}
          style={{ width: 300, height: 200 }}
        ></ImageBackground>

        <Text style={{ fontSize: 24 }}>Организация: ИП "Кракен"</Text>
        <Text style={{ fontSize: 18 }}>Капитан: Дейви Джонс Старший</Text>
        <Text style={{ fontSize: 18 }}>Контактные данные: +79145553535</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
};

export default PageShipDetail;
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Start = () => {
  const bottomBestiah = {
    latitude: 61.97379615618893,
    longtitude: 129.90434473580075,
  };

  const darkLah = {
    latitude: 62.10629142237101,
    longtitude: 129.8065651657179,
  };
  const micro203 = {
    latitude: 62.04819300049562,
    longtitude: 129.77405489495698,
  };

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>In the name of the BJladika!</Text>
      <MapView
        style={{
          width: "100%",
          height: "100%",
          marginStart: 10,
          marginEnd: 10,
        }}
        initialRegion={{
          latitude: 62.03389,
          longitude: 129.73306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title={"MMM"}
          coordinate={{bottomBestiah}}
        ></Marker>
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Start;

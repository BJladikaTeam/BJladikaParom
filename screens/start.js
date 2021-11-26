import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Start = () => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>In the name of the BJladika!</Text>
      <MapView
        style={{ width: "100%", height: "100%", marginStart: 10, marginEnd: 10 }}
        initialRegion={{
          latitude: 62.03389,
          longitude: 129.73306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
          <Marker
            title={"MMM"}
            coordinate={{
                latitude: 62.02717246069274,
                longitude: 129.76453188102798,
            }}>

          </Marker>
          
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Start;

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View, Dimensions } from "react-native";
import  MapView, { Marker, } from "react-native-maps";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    height:400,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#fff",
    width:"100%"
  },
});

const Modal2 = ({navigation}) => {
  return (
    <View style={{ flex:1, width:width, backgroundColor: 'transparent', alignItems: "center", justifyContent: 'flex-end' }}>
        <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    </View>
  );
};

export default Modal2;
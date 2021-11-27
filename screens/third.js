import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ShipListItem from "../components/shipListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  tch_opacity_logout: {
    marginTop: 35,
    height: 60,
    alignItems: "center",
    backgroundColor: "#A4BFCA",
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 50,
  },
});

const Third = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {});

  const items = [
    {
      id: 1,
      body: "Жатай",
      key: 1,
      author_key: 1,
    },
    {
      id: 2,
      body: "Техтюр",
      key: 4,
      author_key: 1,
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 20 }}>
        {items.map((item) => {
          return (
            <ShipListItem
              title={item.id}
              body={item.body}
              key={item.key}
              author_key={item.author_key}
              navigation={navigation}
            ></ShipListItem>
          );
        })}
      </ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>In the name of the BJladika!</Text>
      <TouchableOpacity
        style={styles.tch_opacity_logout}
        title={"Log In"}
        onPress={() => {
          navigation.push("MegaMind");
        }}
      >
        <Text style={{ fontSize: 18, marginTop: 18, color: "white" }}>
          Edit Account
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Third;

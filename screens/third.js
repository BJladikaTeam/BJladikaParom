import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
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

const Third = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {});

  const items = [
    {
      id: "Жатай - Речной порт",
      body: "Подушка",
      date: "01.12.2021 16:45",
      key: 1,
      author_key: 12,
      type: 1,
    },
    {
      id: "Жатай - Марха",
      body: "Паром",
      date: "11.12.2021 21:45",
      key: 4,
      author_key: 1,
      type: 2,
    },
    {
      id: "Город - Город",
      body: "Паром",
      date: "13.12.2021 21:45",
      key: 18,
      author_key: 1,
      type: 1,
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 60 }}>
        {items.map((item) => {
          return (
            <ShipListItem
              title={item.id}
              body={item.body}
              key={item.key}
              author_key={item.author_key}
              date={item.date}
              navigation={navigation}
              type={item.type}
            ></ShipListItem>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Third;

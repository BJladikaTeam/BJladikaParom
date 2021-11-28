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
      way: "203 мкр - Нижний Бестях",
      type: 1,
      type_name: "Подушка",
      date: "01.12.2021 16:45",
      spaces: 13,
      taken: 4,
    },
    {
      way: "Нижний Бестях - 203 мкр",
      type: 2,
      type_name: "Паром",
      date: "11.12.2021 21:45",
      spaces: 88,
      taken: 16,
    },
    {
      way: "Нижний Бестях - 203 мкр",
      type: 1,
      type_name: "Подушка",
      date: "13.12.2021 21:45",
      spaces: 88,
      taken: 16,
    },
    {
      way: "203 мкр - Нижний Бестях",
      type: 1,
      type_name: "Подушка",
      date: "01.12.2021 16:45",
      spaces: 13,
      taken: 4,
    },
    {
      way: "203 мкр - Нижний Бестях",
      type: 1,
      type_name: "Подушка",
      date: "01.12.2021 16:45",
      spaces: 13,
      taken: 4,
    },
    {
      way: "203 мкр - Нижний Бестях",
      type: 1,
      type_name: "Подушка",
      date: "01.12.2021 16:45",
      spaces: 13,
      taken: 4,
    },
    {
      way: "203 мкр - Нижний Бестях",
      type: 1,
      type_name: "Подушка",
      date: "01.12.2021 16:45",
      spaces: 13,
      taken: 4,
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 60 }}>
        {items.map((item) => {
          return (
            <ShipListItem
              way={item.way}
              type={item.type}
              type_name={item.type_name}
              date={item.date}
              spaces={item.spaces}
              taken={item.taken}
              navigation={navigation}
            ></ShipListItem>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Third;

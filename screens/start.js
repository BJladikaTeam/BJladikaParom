import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundButton1: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  roundButton2: {
    marginStart: 5,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "lightblue",
  },
  containerContent: { flex: 1, marginTop: 40 },
  containerHeader: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#F1F1F1",
  },
  headerContent: {
    marginTop: 0,
  },
  Modal: {
    backgroundColor: "#005252",
    marginTop: 0,
  },
});

const Start = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const data = [
    {
      gorod: "sdasd",
    },
    {
      gorod: "sdf",
    },
    {
      gorod: "dshgfs",
    },
    {
      gorod: "dfhjsd",
    },
    {
      gorod: "dshgfs",
    },
    {
      gorod: "dshgfs",
    },
  ];

  const bottomBestiah = {
    latitude: 61.97379615618893,
    longitude: 129.90434473580075,
  };

  const darkLah = {
    latitude: 62.10629142237101,
    longitude: 129.8065651657179,
  };
  const micro203 = {
    latitude: 62.04819300049562,
    longitude: 129.77405489495698,
  };

  const way = [
    {
      latitude: 62.10629142237101,
      longitude: 129.8065651657179,
    },
    {
      latitude: 62.10629142237101,
      longitude: 129.8065651657179,
    },
    {
      latitude: 62.10629142237101,
      longitude: 129.8065651657179,
    },
  ];

  const megaFilter = (value) => {
    return value >= 10;
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    //setActiveSearch(true)

    console.log(query);
    navigation.navigate("Modal");
  };

  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  const [show, setShow] = useState(false);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {/* {activeSearch ? data?.filter(megaFilter)=>{return <Text>{object.gorod}</Text>}) : null} */}

      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            show == true ? setShow(false) : setShow(true);
            console.log(show);
          }}
          style={styles.roundButton1}
        >
          <Text>I'm a button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Text>I</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Text>Filter</Text>
        </TouchableOpacity>
      </View>

      <MapView
        style={{
          width: "75%",
          height: "60%",
          marginStart: 10,
          marginEnd: 10,
          marginTop: 10,
        }}
        initialRegion={{
          latitude: 62.03389,
          longitude: 129.73306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker title={"Нижний Бестях"} coordinate={micro203}>
          <Callout>
            <Text>Нижний Бестях</Text>
            <Text>Вставить кнопки, дизайн</Text>
          </Callout>
        </Marker>
      </MapView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Modal2");
        }}
        style={styles.roundButton2}
      >
        <Text>DOODOD</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Start;

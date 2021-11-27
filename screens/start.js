import React, { Component, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Touchable,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { Searchbar } from "react-native-paper";
import CustomCallout from "../components/customCallout";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import SearchableDropdown from "react-native-searchable-dropdown";
import SearchableDropDown from "react-native-searchable-dropdown";

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
    marginStart: 5,
    marginTop: 10
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
  roundButton3: {
    marginTop: 725,
    marginStart: 5,
    width: 200,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "lightblue",
    alignSelf: "center",
    position: "absolute",
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
  customView: {
    width: 140,
    height: 140,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "column",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 35,
  },
});

const initialButtons = [
  { text: "qwe", color: "red" },
  { text: "alpha", color: "blue" },
  { text: "asd", color: "orange" },
];

const Start = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const [listButtons, setListButtons] = useState(initialButtons);

  const items = [
    {
      id: 1,
      name: "Жатай",
    },
    {
      id: 2,
      name: "Техтюр",
      key: 1,
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

  const randomPoint1 = {
    latitude: 62.04934577086408,
    longitude: 129.7917830407309,
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

  const renderButtons = () => {
    return buttonList.map(() => {
      return (
        <TouchableOpacity onPress={() => setListButtons()}></TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 62.03389,
          longitude: 129.73306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker title={"203 Микрорайон"} coordinate={micro203}>
          <Callout style={{ borderRadius: 100 }}>
            <View style={{ borderRadius: 25 }}>
              <Text>203 Микрорайон</Text>
              <Text>Вставить кнопки, дизайн</Text>
            </View>
          </Callout>
        </Marker>

        <Marker title={"98"} coordinate={randomPoint1}>
          <Callout
            style={{ borderRadius: 100 }}
            onPress={() => {
              navigation.navigate("ModalShipDetail");
            }}
          >
            <View style={{ borderRadius: 25 }}>
              <Icon2 name="biking" size={30} />
              <Text>Лодочка</Text>
              <Text>Вставить кнопки, дизайн</Text>
            </View>
          </Callout>
        </Marker>

        <Marker title={"Нижний Бестях"} coordinate={bottomBestiah}>
          <Callout
            alphaHitTest
            tooltip
            onPress={(e) => {
              if (
                e.nativeEvent.action === "marker-inside-overlay-press" ||
                e.nativeEvent.action === "callout-inside-press"
              ) {
                return;
              }
            }}
            style={styles.customView}
          >
            <CustomCallout>
              <Text
                style={{ alignSelf: "center", textAlign: "center" }}
              >{`Нижний Бестях`}</Text>
              <Text
                style={{ alignSelf: "center", textAlign: "center" }}
              >{`Дизайн Вставить кнопки`}</Text>
            </CustomCallout>
          </Callout>
        </Marker>
      </MapView>

      {/* <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          marginTop: 35,
        }}
      /> */}

      {/* {activeSearch ? data?.filter(megaFilter)=>{return <Text>{object.gorod}</Text>}) : null} */}

      <View style={{ marginTop: 35, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            //show == true ? setShow(false) : setShow(true);
            console.log(show);
            navigation.push("Profile");
          }}
          style={styles.roundButton1}
        >
          <Icon2 name="user" size={30} />
        </TouchableOpacity>

        <SearchableDropdown
          multi={true}
          onItemSelect={(item) => {
            const items = selectedItems;
            items.push(item);
            this.setState({ selectedItems: items });
          }}
          containerStyle={{ marginTop: 5, marginStart: 10, width: 300, padding: 5, backgroundColor: "white" }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            marginStart: 10,
            marginEnd: 10,
            backgroundColor: "#ddd",
            borderColor: "#bbb",
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: "#222" }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={items}
          defaultIndex={2}
          chip={true}
          resetValue={false}
          textInputProps={{
            placeholder: "Поиск",
            underlineColorAndroid: "transparent",
            style: {
              padding: 12,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
            },
            onTextChange: (text) => alert(text),
          }}
          listProps={{
            nestedScrollEnabled: true,
          }}
        />
      </View>

      {show == true ? (
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Icon2 name="star" size={30} />
        </TouchableOpacity>
      ) : null}
      {show == true ? (
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Icon2 name="info-circle" size={30} />
        </TouchableOpacity>
      ) : null}
      {show == true ? (
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Icon2 name="sliders-h" size={30} />
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Modal2");
        }}
        style={styles.roundButton3}
      >
        <Text>DOODOD</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Start;

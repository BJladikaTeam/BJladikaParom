import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { Marker, MapView } from "react-native-maps";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import PassengerListItem from "../components/passengerListItem";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

const CaptainQrScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[
          StyleSheet.absoluteFillObject,
          { marginTop: 50, height: 400, width: 400 },
        ]}
      />
      <View style={{ marginTop: -300, width: 200, alignSelf: "center" }}>
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>

      <View style={{ marginTop: 600 }}>
        <ScrollView>
          <PassengerListItem></PassengerListItem>
          <PassengerListItem></PassengerListItem>
          <PassengerListItem></PassengerListItem>
          <PassengerListItem></PassengerListItem>
          <PassengerListItem></PassengerListItem>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CaptainQrScanner;

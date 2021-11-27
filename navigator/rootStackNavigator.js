import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Start from "../screens/start";
import TabNavigator from "../navigator/tabNavigator";
import Modal from "../screens/modal";
import Modal2 from "../screens/modal2";
import ModalShipDetail from "../screens/modalShipDetail";
import PageShipDetail from "../screens/pageShipDetail";
import ProfileUser from "../screens/profileUser";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MegaMind"
          component={PageShipDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileUser}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            cardStyle: {
              backgroundColor: "transparent",
            },
          }}
          component={Modal}
        />
        <Stack.Screen
          name="Modal2"
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            cardStyle: {
              backgroundColor: "transparent",
            },
          }}
          component={Modal2}
        />
        <Stack.Screen
          name="ModalShipDetail"
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            cardStyle: {
              backgroundColor: "transparent",
            },
          }}
          component={ModalShipDetail}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

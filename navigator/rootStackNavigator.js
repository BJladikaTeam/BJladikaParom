import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Start from "../screens/start";
import TabNavigator from "../navigator/tabNavigator";
import Modal from "../screens/modal";
import Modal2 from "../screens/modal2";

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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

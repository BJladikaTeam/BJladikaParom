import React from "react";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Start from "../screens/start";
import Second from "../screens/second";
import Third from "../screens/third";

const Tab = createBottomTabNavigator();

const TabNavigator = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Start"
        component={Start}
        options={{
          headerShown: false,
          tabBarLabel: "Карта",
          tabBarIcon: ({ color }) => (
            <Icon2 name="map-marked" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Third"
        component={Third}
        options={{
          tabBarLabel: "Список Рейсов",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon2 name="th-list" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

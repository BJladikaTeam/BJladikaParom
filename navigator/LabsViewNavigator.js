import React,{useState} from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
  } from 'react-native';
  
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Start from '../screens/Start'
import Second from '../screens/Second'

const { width, height } = Dimensions.get('screen')
const Tab = createBottomTabNavigator();

const LabsView = ({})=>{
    return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor:'#0066FF',
                inactiveTintColor:'black'
            }}>
                <Tab.Screen 
                    name="Start" 
                    component={Start}
                    options={{
                    tabBarLabel: 'UseStateLab',
                    tabBarIcon: ({ color }) => (
                        <Icon2 name="chrome" color={color} size={30} />
                    ),
                    }}
                />
                <Tab.Screen 
                    name="Second" 
                    component={Second}
                    options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <Icon2 name="playstation" color={color} size={30} />
                    ),
                    }}
                />
            </Tab.Navigator>
    )
}

export default LabsView
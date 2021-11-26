import React from 'react'
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Start from '../screens/start'
import Second from '../screens/second'

const Tab = createBottomTabNavigator();

const TabNavigator = ({}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Start"
                component={Start}
                options={{
                    tabBarLabel: 'UseStateLab',
                    tabBarIcon: ({color}) => (
                        <Icon2 name="chrome" color={color} size={30}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Second"
                component={Second}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({color}) => (
                        <Icon2 name="playstation" color={color} size={30}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

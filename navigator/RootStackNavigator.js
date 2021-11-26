import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Start from '../screens/Start'
import Second from '../screens/Second'
import LabsViewNavigator from './LabsViewNavigator'

const Stack = createStackNavigator()

const RootStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LabsViewNavigator" component={LabsViewNavigator}/>
        </Stack.Navigator>
    )
}

export default RootStackNavigator
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {Dimensions, View} from 'react-native';
import TabNavigator from './navigator/tabNavigator'
import RootStackNavigator from './navigator/rootStackNavigator';


const {width, height} = Dimensions.get('screen')

const App = () => {

    return (
        <View style={{width, height}}>
            <NavigationContainer>
                <RootStackNavigator/>
            </NavigationContainer>
        </View>
    );
}
export default App



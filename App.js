import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {Dimensions, View} from 'react-native';
import TabNavigator from './navigator/tabNavigator'

const {width, height} = Dimensions.get('screen')

const App = () => {

    return (
        <View style={{width, height}}>
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
        </View>
    );
}
export default App



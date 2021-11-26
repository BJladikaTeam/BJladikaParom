import React from 'react'
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native'
import { Marker, MapView } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },

})

const Second = () => {

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>In the name of the BJladika!</Text>
            <StatusBar style="auto"/>
        </View>
    );
};

export default Second

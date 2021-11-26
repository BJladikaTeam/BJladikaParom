import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Image, Button, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

//TODO: Add change name too

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24
    },
    container: {
        flex: 1,
        margin: 15
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginTop: 24
    },
    button_view: {
        marginTop: 24,
        alignItems: 'center'
    },
    image_round:{
        marginTop: 20,
        width: 160,
        height: 160,
        alignSelf: 'center',
        //Below lines will help to set the border radius
        borderRadius: 100,
        overflow: 'hidden',
    },
    tch_opacity_logout: {
        marginTop: 35,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#A4BFCA',
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 50
    },
})

const image = {};

const Second = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>In the name of the BJladika!</Text>
        <StatusBar style="auto" />
        </View>
    );
};

export default Second
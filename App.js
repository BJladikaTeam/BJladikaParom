import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState }  from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native'
import RootStackNavigator from './navigator/RootStackNavigator'
import { Dimensions, ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

const {width, height} = Dimensions.get('screen')

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'white',
  },
};

export default function App() {

  return (
    <View style={{width,height}}>
        <NavigationContainer theme={MyTheme}>
            <RootStackNavigator/>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

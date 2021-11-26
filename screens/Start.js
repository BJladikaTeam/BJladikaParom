import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tch_opacity: {
        marginTop:10,
        height: 40,
        alignItems:'center',
        backgroundColor: 'lightblue'
    },
    square_view_rainbow: {
        marginTop:30,
        alignSelf:'center',
        width: 50,
        height: 50
    },
    text_lab_title:{
        textAlign:'center',
        marginTop:25
    }
})

const Start = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
        const response = await fetch('http://91.201.237.36/parom/geo?ferry_id=111');
        const json = await response.json();
        setData(json);
        console.log(json.Object);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);

    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>In the name of the BJladika!</Text>
        <StatusBar style="auto" />
        </View>
    );
};

export default Start
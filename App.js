import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

var boxes = [[" "," "," "],[" "," "," "],[" "," "," "]];
var current_player = "p1";

const Grid=()=>{
  return(
    <View >
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderWidth:5}} ><Text>{boxes[0][0]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[0][1]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[0][2]}</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[1][0]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[1][1]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[1][2]}</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[2][0]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[2][1]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}}><Text>{boxes[2][2]}</Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Grid></Grid>
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

var boxes = [[" "," "," "],[" "," "," "],[" "," "," "]];
var current_symbol = "X";


const Grid=()=>{
  const [currentPlayer,setCurrentPlayer] = React.useState("p1");
  const changePlayer= ()=>{
    if(currentPlayer=="p1"){
      setCurrentPlayer("p2");
      current_symbol = "0";
    }else{
      setCurrentPlayer("p1");
      current_symbol = "X";
    }
  }
  const boxselected=(box_num)=>{
    if(box_num==0){
      boxes[0][0]=current_symbol;
      changePlayer();
    }else if (box_num==1){
      boxes[0][1]=current_symbol;
      changePlayer();
    }else if (box_num==2){
      boxes[0][2]=current_symbol;
      changePlayer();
    }else if (box_num==3){
      boxes[1][0]=current_symbol;
      changePlayer();
    }else if (box_num==4){
      boxes[1][1]=current_symbol;
      changePlayer();
    }else if (box_num==5){
      boxes[1][2]=current_symbol;
      changePlayer();
    }else if (box_num==6){
      boxes[2][0]=current_symbol;
      changePlayer();
    }else if (box_num==7){
      boxes[2][1]=current_symbol;
      changePlayer();
    }else if (box_num==8){
      boxes[2][2]=current_symbol;
      changePlayer();
    }
  }
  return(
    <View >
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(0)}><Text>{boxes[0][0]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(1)}><Text>{boxes[0][1]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(2)}><Text>{boxes[0][2]}</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(3)}><Text>{boxes[1][0]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(4)}><Text>{boxes[1][1]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(5)}><Text>{boxes[1][2]}</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(6)}><Text>{boxes[2][0]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(7)}><Text>{boxes[2][1]}</Text></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:5}} onPress={()=>boxselected(8)}><Text>{boxes[2][2]}</Text></TouchableOpacity>
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

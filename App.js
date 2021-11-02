import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

var boxes = [[" "," "," "],[" "," "," "],[" "," "," "]];
var current_symbol = "X";
var terminating_message = " ";


const Grid=()=>{
  const [currentPlayer,setCurrentPlayer] = React.useState("p1");
  const check_termination=()=>{
    if((boxes[0][0]==boxes[0][1] && boxes[0][1]==boxes[0][2] && boxes[0][2]!=" ") || (boxes[1][0]==boxes[1][1] && boxes[1][1]==boxes[1][2] && boxes[1][2]!=" ") || (boxes[2][0]==boxes[2][1] && boxes[2][1]==boxes[2][2] && boxes[2][2]!=" ")){
      terminating_message= currentPlayer + " Wins";
    }else if((boxes[0][0]==boxes[1][0] && boxes[1][0]==boxes[2][0] && boxes[2][0]!=" ") || (boxes[0][1]==boxes[1][1] && boxes[1][1]==boxes[2][1] && boxes[2][1]!=" ") || (boxes[0][2]==boxes[1][2] && boxes[1][2]==boxes[2][2] && boxes[2][2]!=" ")){
      terminating_message= currentPlayer + " Wins";
    }else if((boxes[0][0]==boxes[1][1] && boxes[1][1]==boxes[2][2] && boxes[2][2]!=" ") || (boxes[0][2]==boxes[1][1] && boxes[1][1]==boxes[2][0] && boxes[2][0]!=" ")){
      terminating_message= currentPlayer + " Wins";
    }else{
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(boxes[i][j]==" "){
            return
          }
        }
      }
      terminating_message = "Its Draw";
    }
  }
  const changePlayer= ()=>{
    check_termination();
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
      if (boxes[0][0]==" "){
        boxes[0][0]=current_symbol;
        changePlayer();
      }
    }else if (box_num==1){
      if (boxes[0][1]==" "){
        boxes[0][1]=current_symbol;
        changePlayer();
      }
    }else if (box_num==2){
      if (boxes[0][2]==" "){
        boxes[0][2]=current_symbol;
        changePlayer();
      }
    }else if (box_num==3){
      if (boxes[1][0]==" "){
        boxes[1][0]=current_symbol;
        changePlayer();
      }
    }else if (box_num==4){
      if (boxes[1][1]==" "){
        boxes[1][1]=current_symbol;
        changePlayer();
      }
    }else if (box_num==5){
      if (boxes[1][2]==" "){
        boxes[1][2]=current_symbol;
        changePlayer();
      }
    }else if (box_num==6){
      if (boxes[2][0]==" "){
        boxes[2][0]=current_symbol;
        changePlayer();
      }
    }else if (box_num==7){
      if (boxes[2][1]==" "){
        boxes[2][1]=current_symbol;
        changePlayer();
      }
    }else if (box_num==8){
      if (boxes[2][2]==" "){
        boxes[2][2]=current_symbol;
        changePlayer();
      }
    }
  }
  if(terminating_message==" "){
    return(
      <View >
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(0)}><Text>{boxes[0][0]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(1)}><Text>{boxes[0][1]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(2)}><Text>{boxes[0][2]}</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(3)}><Text>{boxes[1][0]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(4)}><Text>{boxes[1][1]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(5)}><Text>{boxes[1][2]}</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(6)}><Text>{boxes[2][0]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(7)}><Text>{boxes[2][1]}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>boxselected(8)}><Text>{boxes[2][2]}</Text></TouchableOpacity>
        </View>
      </View>
    );
  }else{
    return (
      <View>
        <Text>{terminating_message}</Text>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
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
  btn: {
    borderWidth:5,
    width: 50,
    height: 50
  }
});

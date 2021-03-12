import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      valorActualA:2,
      valorActuaBA:2,
      valorXB:0,
      valorYB:1,
      flagFirstTime:true , 
      valoractualC:1,
      cadenaSerieA:' ',
      cadenaSerieB:' ',
      cadenaSerieC:' ',
      totalcadenaSerieC:1,
      cadenaEnDemostracion:' '
    };
  }

 onSubmitSerieA = () => {
  this.state.cadenaSerieA+= `${this.state.valorActualA}, `;
  this.state.valorActualA += 2;
  console.log(this.state.cadenaSerieA);
  var cadenaEnDemostracion = this.state.cadenaSerieA;
  this.setState({cadenaEnDemostracion});
  }

// Serie Fibonacci
 onSubmitSerieB = () => {
  let aux = this.state.valorXB + this.state.valorYB;
  let aux2 = this.state.valorXB;

  if(this.state.flagFirstTime){
    this.state.cadenaSerieB = `${this.state.valorXB}, ${this.state.valorYB}, `
    let flagFirstTime = false;
    this.setState({flagFirstTime});
  }else{
    this.state.cadenaSerieB += `${aux}, `
  }
  this.setState({
    valorYB: aux2,
    valorXB: aux,
  });

  var cadenaEnDemostracion = this.state.cadenaSerieB;
  this.setState({cadenaEnDemostracion});
 } 
  
 onSubmitSerieC = () => {
  this.state.totalcadenaSerieC *= this.state.valoractualC; 
  this.state.cadenaSerieC += `${this.state.valoractualC} * `;
  this.state.valoractualC += 1;
  var cadenaEnDemostracion = this.state.cadenaSerieC + `| Total: ${this.state.totalcadenaSerieC}`;
  this.setState({cadenaEnDemostracion});
} 
  render(){
  return(
      <>
      <StatusBar barStyle='light-content'></StatusBar>

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Examen_Fieras</Text>
        <Text style={styles.concatenateArea}>{this.state.cadenaEnDemostracion}</Text>
      </SafeAreaView>
      <View style={styles.viewForButton}>
        <Button title='Serie de num 1' onPress={() => {this.onSubmitSerieA()}} style={styles.buttonMargin}/>
        <Text style={{marginVertical:10}}></Text>
        <Button title='Serie de num 2' onPress={() => this.onSubmitSerieB()} style={styles.buttonMargin}/>
        <Text style={{marginVertical:10}}></Text>
        <Button title='Serie de num 3' onPress={() => {this.onSubmitSerieC()}} style={styles.buttonMargin}/>
      </View>      
      </>
  );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: '#0892d0',
    height: 200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  titleApp:{
    fontSize:50,
    fontWeight:'bold',
    color:'#000',
    marginTop:35
  },
  viewForButton:{
    width: "90%", 
    left: 20,
    paddingHorizontal: 60,
    marginTop: 250
  },
  concatenateArea:{
    marginTop: 200,
    borderColor: '#121f1f',
    borderBottomWidth:1,
    width:'90%',
    height: '200%'
  },
  buttonMargin:{
    color:'#000',
  }
})
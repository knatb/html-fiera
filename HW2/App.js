import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Form';
import Resultado from './src/components/Resultado'

export default function App(){
  const [num1,setNum1] = useState(null);
  const [num2,setNum2] = useState(null);

  const onSubmit = () => {
    console.log(`Numero 1 -> ${num1}`)
    console.log(`Numero 2 -> ${num2}`)
  }
  return(
      <>
      <StatusBar barStyle='light-content'></StatusBar>

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Este es una practica chida</Text>
        <Form setNum1={setNum1} setNum2 ={setNum2} />
        
      </SafeAreaView>
 

      <View style={styles.viewForButton}>
        <Button title='Enviar' onPress={onSubmit}/>
      </View>
      <Resultado setNum1={num1} setNum2 ={num2} />
      
      </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#000',
    marginTop:15
  },
  viewForButton:{
    width: "90%", 
    left: 20,
    paddingHorizontal: 60,
    marginTop: 150
  },
  viewForResult:{
    marginTop: 30,
    backgroundColor: '#116',
  }
})
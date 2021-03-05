import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';

import colors from '../utils/colors';

export default function Resultado(props){
  //const {setNum1, setNum2} = props;
  const setNum1 = Number(props.setNum1);
  const setNum2 = Number(props.setNum2);
  console.log(`Los props a operar son ${setNum1} y ${setNum2}`);
  const sum = Number(setNum1 + setNum2);
  const rest = Number(setNum1 - setNum2);
  const mult = Number(setNum1 * setNum2);
  const divisor = Number(setNum1 / setNum2);
    
  return(

        <View style={styles.container}>
            <Text style={styles.titleRes}>RESULTADOS</Text>
            <Text style={styles.content}>Su sumatoria = {sum}</Text>  
            <Text style={styles.content}>Su resta = {rest}</Text>
            <Text style={styles.content}>Su multiplicacion = {mult}</Text>        
            <Text style={styles.content}>Su division = ${divisor}</Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        flex: 1,
        width: "85%",
        backgroundColor: colors.PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginTop: 15,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius: 30,
      },
      titleRes: {
        fontSize: 32,
        fontWeight: 'bold',
      },
      content: {
        fontSize: 20,
        color: '#000',
      },
});
import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';

import colors from '../utils/colors';

export default function Form(props){
  const{setNum1, setNum2} = props;

  console.log(props);

  return(
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput placeholder='Numero 1' keyboardType='numeric' style={ styles.input } 
        onChange = {(e)=>setNum1(e.nativeEvent.text)}
        //onChange = {(e)=> console.log(e.nativeEvent.text)}
        />
        <TextInput placeholder='Numero 2' keyboardType='numeric' style={[ styles.input, styles.input2 ]} 
        onChange = {(e)=>setNum2(e.nativeEvent.text)}
        //onChange = {(e)=> console.log(e.nativeEvent.text)}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewForm:{
    position: 'absolute',
    bottom: -90,
    width:'85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center'
  },
  viewInputs:{
    flexDirection: 'row'
  },
  input:{
    height: 50,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '50%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 20,
    color: '#000'
  },
  input2:{
    width: '50%',
    marginLeft: 5
  },
});
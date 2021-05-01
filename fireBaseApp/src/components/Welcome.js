import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from '../utils/firebase';

export default function WelcomeScreen(props){

  const {username} = props;
  
  const logout = ()=>{
    firebase.auth().signOut();
  }

  return(
    <View style={style.container}>
      <Text style={style.whiteTxt}>Bienvenido : {`${username.email}`}</Text>
      <Button title = "cerrar sesión" onPress={logout}></Button>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteTxt:{
        color:'#fff'
    }
})
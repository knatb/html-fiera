import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Auth from "./src/components/Auth"
import firebase from './src/utils/firebase';
import "firebase/auth/";
import WelcomeScreen from './src/components/Welcome';

export default function App() {

  const [user,setUser] = useState(undefined);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((response)=>{
      setUser(response);
    })
  },[]);

  if(user === undefined) return null;

  return (
    <>
    <StatusBar barStyle = "light-content"/>
      <SafeAreaView style={styles.background}>
        {user ? <WelcomeScreen username={user}/>:<Auth/>}
      </SafeAreaView>
    </>
  );
}

/*function Logout() {
  const logout = ()=>{
    firebase.auth().signOut();
  }
  return(
    <View>
      <Text>estás dentro</Text>
      <Button title = "cerrar sesión" onPress={logout}></Button>
    </View>
  )
}*/

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#15212b",
    height:"100%",
  }
});

//Practica - Crear una base de datos nueva, en la cual reciba email password y nombre completo, que cuando inicie sesion, muestre los datos 
// Es decir, Bienvenido : Nombre, usuario, con su respectivo boton de cerrar sesion
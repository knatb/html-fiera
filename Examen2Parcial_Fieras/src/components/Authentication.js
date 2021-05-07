import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'

export default function Authentication(){
  const [isLoginPageSelected, setIsLoginPageSelected] = useState(true);

  const changeForm = () =>{
    setIsLoginPageSelected(!isLoginPageSelected);
  }

  const gifBackground = { uri : 'https://i.pinimg.com/originals/4c/ba/b9/4cbab97eaf40a31982176951814d0c11.gif'};

  return(
    <>
    <View style = {styles.centerView}>
      <ImageBackground source={gifBackground} style={styles.imageBackground}>
      <Text style={styles.texto1} >Seguros Artaban™</Text>
      {isLoginPageSelected ? (
        //PAGINA DE LOGIN
        <LoginForm changeForm={changeForm}/>
      ):(
        //PAGINA DE REGISTRO
        <RegisterForm changeForm={changeForm}/>
      )
      }
      </ImageBackground>
    </View>
    </>
  )
};

const styles  = StyleSheet.create({
  centerView:{
    flex:1,
    alignItems:'center'
  },
  imageBackground:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
    width:'100%',
    opacity:0.9
  },
  texto1:{
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 100,
    textAlign: 'center',
    color:'#fff',
    backgroundColor: 'transparent'
},
});
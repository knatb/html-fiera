import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, SafeAreaView } from 'react-native';
import Form from '../components/Form';
import Resume from '../components/Resume';

export default function AppForm(props){
  const {username} = props;
  const [isCreatingForms, setIsCreatingForms] = useState(true);

  const changeForm = () =>{
    setIsCreatingForms(!isCreatingForms);
  }
  
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [cantidSolicitada, setCantidadSolicitada] = useState(null);

  useEffect(() => {
    console.log([cantidad, interes, meses, total, errorMessage, cantidSolicitada]);
    calculate();
  }, [cantidad, interes, meses, total, errorMessage, cantidSolicitada]);

  const calculate = () => {
    if(!cantidad){
      } else if(!interes){
      } else if(!meses){
      } else {
        const i = interes / 100;
        var _total = {};
        _total.totalConInteres = cantidSolicitada * (1 + i);
        _total.totalConIVA = _total.totalConInteres * (0.16);
        _total.final = _total.totalConIVA + _total.totalConInteres;
        _total.pagoMensual = _total.final / meses;
        if(_total.totalConInteres!=total.totalConInteres || 
            _total.totalConIVA != total.totalConIVA || 
            _total.final != total.final)
          setTotal(_total);
      }
  }
  
  const imgquery = { uri :'https://media.tenor.com/images/f15b4d3d84b30e6dee0d2e16f8681d86/tenor.gif'};
  
    return(
    <>
      <SafeAreaView>
      <ImageBackground source={imgquery} style={styles.imageBackground}>
        {isCreatingForms ? (
        <Form 
          changeForm={changeForm}
          setCantidad={setCantidad}
          setInteres={setInteres}
          setMeses={setMeses}
          setTotal={setTotal}
          setCantidadSolicitada={setCantidadSolicitada}
          cantidSolicitada={cantidSolicitada}
          setErrorMessage={setErrorMessage}
        />
        ):(
        <Resume 
          changeForm={changeForm} 
          cantidad={cantidad}
          interes={interes}
          meses={meses}
          errorMessage={errorMessage}
          cantidSolicitada={cantidSolicitada}
          username={username}
          total={total}
          />
        )
        }
        </ImageBackground>
      </SafeAreaView>
    </>
  )
};

const styles  = StyleSheet.create({
  imageBackground:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
    width:'100%',
    height:667,
    opacity:0.9
  },
});

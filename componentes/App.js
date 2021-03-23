import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, LogBox, SafeAreaView } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

//LogBox.ignoreAllLogs();

export default function App() {

  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log([cantidad, interes, meses, total, errorMessage]);
    calculate();
  }, [cantidad, interes, meses, total, errorMessage]);

  const calculate = () => {
    if(!cantidad){
      setErrorMessage('No ha ingresado ninguna cantidad');
    } else if(!interes){
      setErrorMessage('No ha ingresado los intereses');
    } else if(!meses){
      setErrorMessage('No ha seleccionado los meses');
    } else {
      const i = interes / 100;
      var _total = {};
      _total.totalPayable = cantidad * (1 + i);
      _total.monthlyFee = _total.totalPayable / meses;
      setErrorMessage('');
      if (
        _total.monthlyFee != total.monthlyFee ||
        _total.totalPayable != total.totalPayable
      )
        setTotal(_total);
    }
  }

  return (
    <>
      <StatusBar barStyle='light-content'/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.tittleApp}>Prestamo</Text>
        <Form
          setCantidad={setCantidad}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>
      <Footer/>
      <ResultCalculation
        cantidad={cantidad}
        interes={interes}
        meses={meses}
        total={total}
        errorMessage={errorMessage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  },
});

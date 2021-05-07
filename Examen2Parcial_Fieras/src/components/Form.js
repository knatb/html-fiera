import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import RNPicker from 'react-native-picker-select';
import colors from '../utils/colors';
import firebase from "../utils/firebase";

export default function Form(props){
    //cantidadSolicitada, setCantidadSolicitada 
    const {changeForm, setCantidad, setInteres, setMeses, cantidadSolicitada,setCantidadSolicitada,setTotal, setErrorMessage} = props;

    const [interesesLocal, setInteresLocal]=useState(0);
    const [itemsRNPicker, setitemsRNPicker] = useState([]);
    const logout = ()=>{
        firebase.auth().signOut();
      }

    return(
    <>
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        
            <Text style={styles.tittleApp}>Calcula tu prestamo</Text>
            <View style={styles.viewForm}>
                <View style={styles.viewInputs}>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Ingrese su sueldo' 
                        keyboardType='numeric'
                        onChange={(e) => {
                            setCantidad(e.nativeEvent.text)
                            if(e.nativeEvent.text >= 0 && e.nativeEvent.text <=10000){
                                setInteresLocal(2);
                                setInteres(2);
                                setitemsRNPicker([ 
                                    {label: '3 meses', value: 3},
                                    {label: '6 meses', value: 6}
                                ])
                            }
                            else if(e.nativeEvent.text>=10001 && e.nativeEvent.text<=20000){
                                setInteresLocal(4);
                                setInteres(4);
                                    setitemsRNPicker([ 
                                    {label: '3 meses', value: 3},
                                    {label: '6 meses', value: 6},
                                    {label: '9 meses', value: 9}
                                ])
                            }
                            else if(e.nativeEvent.text >=20001){
                                    setInteresLocal(6);
                                    setInteres(6);
                                    setitemsRNPicker([ 
                                    {label: '3 meses', value: 3},
                                    {label: '6 meses', value: 6},
                                    {label: '9 meses', value: 9},
                                    {label: '12 meses', value: 12},
                                    {label: '24 meses', value: 24}
                                    ])
                            } else {
                                setInteresLocal(0)
                                setitemsRNPicker([])
                            }
                        }
                    }
                    />
                    <TextInput 
                        style={[styles.input],[styles.inputP]} 
                        placeholder='Interes %' 
                        value={'El interes aplicable es: '+ interesesLocal}
                        editable={false}
                        keyboardType='numeric'
                        onChange={(e) =>setInteres(e.nativeEvent.text)}
                    />
                </View>
                <RNPicker
                    onValueChange = {(value) => setMeses(value)}
                    placeholder={{
                        label: 'Plazos acreditados',
                        value: null,
                    }}
                    items= {itemsRNPicker}
                />
                <TextInput 
                        style={[styles.input],[styles.inputP]} 
                        placeholder='Cantidad a solicitar' 
                        value={cantidadSolicitada}
                        onChange={(e) =>{setCantidadSolicitada(e.nativeEvent.text)
                            console.log(cantidadSolicitada)
                        }}
                    />
                <TouchableOpacity style={styles.buttonResume} onPress={changeForm}>
                    <Text style={styles.textResume}>Ir a Resumen</Text>
                </TouchableOpacity>
                <Button title = "Cerrar sesión" onPress={logout}></Button>
            </View>
        </SafeAreaView>
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
        marginBottom: 15
      },
      viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 10,
        height: 250,
        justifyContent: 'center',

    },
    viewInputs: {
        flexDirection: 'column'
    },
    input: {
        height: 30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        width: '100%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 15,
        color: '#000',
        paddingHorizontal: 20
    },
    inputP:{
        width: '100%',
        marginLeft: 5,
        color:'#fff',
        marginBottom:10,
    },
    buttonResume:{
        backgroundColor: "#001B94",        
        color: '#000',
        alignSelf: 'center',
        width: '94%',
        padding: '15px',
        textAlign: 'center',
        marginTop: 50
    },
    textResume:{
        fontSize: 20,
        color: '#FFF',
        borderColor: '#000',
        borderWidth:0.5,
        borderRadius:20,
    },
    
})

const pickerStyle = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#9b9b9b',
        borderRadius: 8,
        color: '#000',
        paddingRight: 30,
        backgroundColor: '#fff'
    },
    inputiOS: {
        fontSize: 16,
        paddingVertical:12 ,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#9b9b9b',
        borderRadius: 4,
        color: '#000',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: 5
    }
});

import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import RNPicker from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props){

    const {setCantidad, setInteres, setMeses} = props;

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Cantidad' 
                    keyboardType='numeric'
                    onChange={(e) => setCantidad(e.nativeEvent.text)}
                />
                <TextInput 
                    style={[styles.input],[styles.inputP]} 
                    placeholder='Interes %' 
                    keyboardType='numeric'
                    onChange={(e) =>setInteres(e.nativeEvent.text)}
                />
            </View>
            <RNPicker
                style={pickerStyle.inputAndroid}
                onValueChange = {(value) => setMeses(value)}
                placeholder={{
                    label: 'Seleccione plazos...',
                    value: null,

                }}
                items= {[
                    {label: '3 meses', value: 3},
                    {label: '6 meses', value: 6},
                    {label: '9 meses', value: 9},
                    {label: '12 meses', value: 12}
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',

    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20
    },
    inputP:{
        width: '40%',
        marginLeft: 5
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

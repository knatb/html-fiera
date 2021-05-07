import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ResultCalculation(props){
    const {changeForm, cantidad, cantidSolicitada,interes, meses, total, errorMessage, username} = props;

    return(
        <View style={styles.content}>
            <View style={styles.boxResult}>
                <Text style={styles.title}>Detalle Préstamo</Text>
                <DataResult title='Usuario: ' value= {`${username.email}`}/>
                <DataResult title='Sueldo base $' value= {`${cantidad}`}/>
                <DataResult title='% Interes: ' value= {`${interes}`}/>
                <DataResult title='Cantidad solicitada: ' value= {`${cantidSolicitada}`}/>
                <DataResult title='Plazos: ' value= {`${meses}`}/>
                <DataResult title="Total con Interes:" value={`${total.totalConInteres?.toFixed(2)}`} />
                <DataResult title="IVA:" value={`${total.totalConIVA?.toFixed(2)}`} />
                <DataResult title="Pago por mensualidad: $" value={`${total.pagoMensual?.toFixed(2)}`} />
            </View>
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
            <TouchableOpacity style={styles.buttonResume} onPress={changeForm}>
                <Text style={styles.title}>Calcular nuevo préstamo</Text>
            </TouchableOpacity>
        </View>
    );
}

function DataResult(props){
    const {title, value} = props;

    return(
        <View style={styles.values}>
            <Text style={styles.whiteText}>{title}</Text>
            <Text style={styles.whiteText}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    values: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    error:{
        textAlign: 'center',
        color: '#cc0000',
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color:'#fff'
        },
    whiteText:{
        color:'#fff'
    },
    buttonResume: {
        marginTop: 40
    }
});

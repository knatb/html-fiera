import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultCalculation(props){
    const {cantidad, interes, meses, total, errorMessage} = props;

    return(
        <View style={styles.content}>
            <View style={styles.boxResult}>
                <Text style={styles.title}>Detalle Préstamo</Text>
                <DataResult title='Cantidad solicitada $' value= {`${cantidad}`}/>
                <DataResult title='% Interes: ' value= {`${interes}`}/>
                <DataResult title='Plazos: ' value= {`${meses}`}/>
                <DataResult title='Pago Mensual $' value= {`${total.monthlyFee?.toFixed(2)}`}/>
                <DataResult title="Total:" value={`${total.totalPayable?.toFixed(2)}`} />
            </View>
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props){
    const {title, value} = props;

    return(
        <View style={styles.values}>
            <Text>{title}</Text>
            <Text>{value}</Text>
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
        marginBottom: 20
    }
});

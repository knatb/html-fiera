import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

var contador =0;
export default function Vertical(props){
    
    const {setOrientation, color1 ,setColor1, color2 ,setColor2, color3 ,setColor3} = props;

    const paleta1 = ['#a40e4c', '#2c2c54', '#acc3a6'];
    const paleta2 = ['#031a6b', '#033860', '#087ca7'];
    const paleta3 = ['#7a306c', '#8e8dbe', '#a9e4ef'];

    return(
        <View style = {styles.container}>
            <TouchableOpacity style={[styles.buttons,{backgroundColor:color1}]} onPress={() => {_alternateColor()}}>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons,{backgroundColor:color2}]} onPress={() =>{_alternateColor()}}>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons,{backgroundColor:color3}]} onPress={() => {_alternateColor()}}>
            </TouchableOpacity>
        </View>
    );

    function _alternateColor(){
        switch(contador){
            case 0:
                setColor1(paleta1[contador])
                setColor2(paleta2[contador])
                setColor3(paleta3[contador])
                contador++;
            break;
            case 1:
                setColor1(paleta1[contador])
                setColor2(paleta2[contador])
                setColor3(paleta3[contador])
                contador++;
            break;
            case 2:
                setColor1(paleta1[contador])
                setColor2(paleta2[contador])
                setColor3(paleta3[contador])
                contador=0;
                setOrientation(false)   //TRUE = VERTICAL || FALSE = HORIZONTAL
            default:
            break;
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '20px',
        paddingBottom: '20px',
        width:150,
    },
    buttons:{
        backgroundColor: '#404040',
        marginTop:20,
        width: 90,
        height: 90,
        textAlign: 'center',
        borderColor: '#fff',
        borderWidth:3,
        backgroundColor:'red'
    },
  });
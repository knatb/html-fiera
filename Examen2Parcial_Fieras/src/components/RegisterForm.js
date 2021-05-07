import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { validateEmail } from '../utils/validation';
import firebase from "../utils/firebase";

export default function RegisterForm(props) {

    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue);
    const [formError, setFormError] = useState({});

    const register = () => {
        console.log("registrando...")
        let error = {};

        if (!formData.email || !formData.password || !formData.confirmPass) {
            if (!formData.email) error.email = true;
            if (!formData.password) error.password = true;
            if (!formData.confirmPass) error.confirmPass = true;
        }
        else if (!validateEmail(formData.email)) {
            error.email = true;
        }
        else if (formData.password !== formData.confirmPass) {
            error.password = true;
            error.confirmPass = true;
        }
        else if (formData.password.length < 6) {
            error.password = true;
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    console.log("Registro exitoso")
                }).catch(() => {
                    setFormError({
                        email: true,
                        password: true,
                        confirmPass: true
                    });
                });
        }
        setFormError(error);
    }

    const onChange = (e, type) => {
      setFormData({...formData, [type]:e.nativeEvent.text});
    }
    
    return (
        <KeyboardAvoidingView style={styles.containerView}>
        <TouchableWithoutFeedback>
            <View style={styles.containerView}>
                <View style={styles.containerView}>                    
                    <TextInput style={[styles.texto2, formError.email && styles.errorInput]} placeholderColor="#fff" placeholder="Correo electrónico" onChange = {(e)=>onChange(e, 'email')}/>
                    <TextInput style={[styles.texto2, formError.password && styles.errorInput]} secureTextEntry={true} placeholderColor="#fff" placeholder="Contraseña" onChange = {(e)=>onChange(e, 'password')}/>
                    <TextInput style={[styles.texto2, formError.confirmPass && styles.errorInput]} placeholderColor="#fff" placeholder="Confirma tu contraseña" onChange = {(e)=>onChange(e, 'confirmPass')}/>
                    <TouchableOpacity
                        style={styles.container}
                        onPress={register}>
                        <Text style={styles.btnLogin} >Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerR}
                        onPress={changeForm}>
                        <Text style={styles.btnRegister}>Volver a inicio de sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

function defaultValue() {
    return {
        email: {},
        password: {},
        confirmPass: {}
    }
}

const styles = StyleSheet.create({
      containerView:{
        flex:1,
    },
    container:{
        backgroundColor: "#001B94",        
        color: '#000',
        alignSelf: 'center',
        width: '94%',
        padding: '15px',
        textAlign: 'center',
        marginTop: 40
    },
    btnLogin:{
        fontSize: 20,
        color: '#FFF'
    },
    containerR: {       
        color: '#000',
        alignSelf: 'center',
        width: '94%',
        padding: '15px',
        textAlign: 'center',
        marginTop: 50
    },
    btnRegister:{
        fontSize: 15,
        color: '#fff',
        alignSelf: 'center',
        marginTop: 10
    },
    errorInput:{
        borderColor: "#940c0c"
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
    texto2:{
        color:'#fff',
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: 'transparent'
    },
})
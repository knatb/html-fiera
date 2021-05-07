import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput} from 'react-native';
import { validateEmail } from '../utils/validation';
import firebase from "../utils/firebase";

export default function LoginForm (props) {
    const { changeForm } = props;

    const [formData, setFormData] = useState(defaultValue);
    const[formError, setFormError] = useState([])
    const login = () =>{
        let error = {};
        if(!formData.email || !formData.password){
            if(!formData.email) error.mail = true;
            if(!formData.password) error.password = true;
          }else if(!validateEmail(formData.email)){
            error.email = true;
          }else { 
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
              console.log('ok');
            })
            .catch(()=>{
              setFormError({
                email:true,
                password:true
              })
            })
          }
          setFormError(error);
    };

    const onChange = (e, type) => {
        setFormData({...formData, [type]:e.nativeEvent.text});
      }

        return(
        <KeyboardAvoidingView style={styles.containerView}>
            <TouchableWithoutFeedback>
                <View style={styles.containerView}>
                    <View style={styles.containerView}>                    
                        <TextInput style={[styles.texto2, formError.email && styles.errorInput]} 
                        placeholderColor="#fff" 
                        placeholder="Correo electrónico" 
                        onChange={(e)=>onChange(e, 'email')}/>
                        <TextInput style={[styles.texto2, formError.password && styles.errorInput]} 
                        secureTextEntry={true} 
                        placeholderColor="#fff" 
                        placeholder="Contraseña" 
                        onChange={(e)=>onChange(e, 'password')}/>
                        <TouchableOpacity
                            style={styles.container}
                            onPress={login}>
                            <Text style={styles.btnLogin} >Ingresar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.containerR}
                            onPress={changeForm}>
                            <Text style={styles.btnRegister}>¿No tiene una cuenta aún?</Text>
                            <Text style={styles.btnRegister}>Registrate aquí</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

function defaultValue() {
    return {
      email: "",
      password: ""
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
        marginTop: 50
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

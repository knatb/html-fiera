import { StatusBar } from 'expo-status-bar';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Auth from './src/components/Authentication';
import AppForm from './src/components/AppForm';
import firebase from './src/utils/firebase';
import "firebase/auth/";

export default function App() {
  const [user,setUser] = useState(undefined);


  useEffect(()=>{
    firebase.auth().onAuthStateChanged((response)=>{
      setUser(response);
    });

  },[]);

  return (
    <>
    <StatusBar barStyle = "dark-content"/>
    <SafeAreaView style={styles.container}>
        {user ? <AppForm username={user}/>:<Auth/>}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

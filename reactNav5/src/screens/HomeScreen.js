import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(props) {

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },  
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    color: '#fff'
  }
});

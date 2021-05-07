import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Horizontal from './components/Horizontal';
import Vertical from './components/Vertical';

export default function App (){

  const [currentOrientation, setOrientation] = useState(true);
  const [color1, setColor1] = useState('#000');
  const [color2, setColor2] = useState('#000');
  const [color3, setColor3] = useState('#000');
  
  return(
    <>
      <View style={styles.container}>
        {
        currentOrientation === true ? 
        <Vertical setOrientation={setOrientation} color1={color1} setColor1={setColor1} color2={color2} setColor2={setColor2} color3={color3} setColor3={setColor3} /> : 
        <Horizontal setOrientation={setOrientation} color1={color1} setColor1={setColor1} color2={color2} setColor2={setColor2} color3={color3} setColor3={setColor3} />
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
Paletas de Colores: 
#a40e4c  #2c2c54  #acc3a6
#031a6b    #033860  #087ca7
#7a306c   #8e8dbe   #a9e4ef
*/
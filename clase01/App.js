import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      numA:0,
      numB:0,
      numC:0,
      x1:null,
      x2:null
    };
  }

  Ecuacion = () =>{
    let nA = Number(this.state.numA);
    let nB = Number(this.state.numB);
    let nC = Number(this.state.numC);

    if(nA == 'NaN' && nB == 'NaN' && nC == 'NaN'){
      alert('Ingrese un numero valido');
    } else if (nA == null && nB == null && nC == null){
      alert('Ingrese un numero diferente de nulo');
    } else if (nA == '' && nB == '' && nC == ''){
      alert('Favor de llenar los campos');
    } else {
      let disc = (nB*nB - 4* nA*nC);
      let x1 = (-nB + Math.sqrt(disc))/(2*nA); // +
      let x2 = (-nB - Math.sqrt(disc))/(2*nA); // -
      this.setState({x1});
      this.setState({x2});
    }
  };

  render() {
    return(
      <View>
        <TextInput
          style={styles.textInputs}
          placeholder = "Ingrese el coeficiente de a"
          onChangeText={(numA) => this.setState({ numA })}
        />
        <TextInput
          style={styles.textInputs}
          placeholder = "Ingrese el coeficiente de b"
          onChangeText={(numB) => this.setState({ numB })}
        />
        <TextInput
          style={styles.textInputs}
          placeholder = "Ingrese el coeficiente de c"
          onChangeText={(numC) => this.setState({ numC })}
        />
        <Button title="Resultado" onPress={this.Ecuacion}/>  

        <Text style={styles.baseText}>
          Valor de x1 : {this.state.x1} <br/>
          Valor de x2 : {this.state.x2} <br/>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
      fontWeight: 'bold'
  },
  textInputs: {
    borderWidth: 1, 
    margin: 0 
  }
});
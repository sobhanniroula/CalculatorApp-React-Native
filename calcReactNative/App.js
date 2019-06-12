import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.displayResult}><Text style={styles.resultText}>Results</Text></View>
      <View style={styles.displayCalculation}><Text style={styles.calculationText}>Calculations</Text></View>
      
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>9</Text></TouchableOpacity>
          </View> 
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>6</Text></TouchableOpacity>
          </View>  
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>3</Text></TouchableOpacity>
          </View>  
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>.</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn1}><Text style={styles.btnText}>DEL</Text></TouchableOpacity>
          </View>   
        </View>
        <View style={styles.operators}>
            <TouchableOpacity style={styles.btn2}><Text style={styles.btnText}>&divide;</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2}><Text style={styles.btnText}>&times;</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2}><Text style={styles.btnText}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2}><Text style={styles.btnText}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnEquals}><Text style={styles.btnText}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


// CSS codes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  displayResult: {
    flex: 2,
    backgroundColor: '#009988',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15
  },

  resultText: {
    fontSize: 30,
    color: '#fff'
  },

  calculationText: {
    fontSize: 25,
    color: '#333'
  },

  displayCalculation: {
    flex: 1,
    backgroundColor: '#ccc',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15
  },

  buttons: {
    flexDirection: 'row',
    flex: 8
  },

  numbers: {
    flex: 3,
    backgroundColor: '#333'
  },

  operators: {
    flex: 1,
    backgroundColor: '#227799',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },

  btn1: {
    backgroundColor: '#333',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  btn2: {
    backgroundColor: '#227799',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  btnEquals: {
    backgroundColor: '#fd534f',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  btnText: {
    color: '#fff',
    fontSize: 30
  }

  
});

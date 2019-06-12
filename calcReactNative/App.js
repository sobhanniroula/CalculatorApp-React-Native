import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resultText: '0'
    };

    this.handleTouch = this.handleTouch.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  calculateResult() {
    const text = this.state.resultText;
    // parse
  }

  handleTouch(text) {
    console.log(text);

    if (text == 'DEL') {
      let orgText = this.state.resultText.split('');
      orgText.pop();
      if(orgText.length === 0) {
        this.setState({
          resultText: '0'
        });
      } else {
        this.setState({
          resultText: orgText.join('')
        });
      }
      
    } else {
      if (this.state.resultText === '0') {
        this.setState({
          resultText: text
        });
      } else {
        this.setState({
          resultText: this.state.resultText + text
        });
      }
    }

  }


  handleOperator(op) {
    switch(op) {
      case '=':
      return this.calculateResult();
      break;

      case '/':
      case '*':
      case '-':
      case '+':
        if (this.state.resultText === '0' || this.state.resultText === '') {
          return;
        } else {
          this.setState({
            resultText: this.state.resultText + op
          });
        }
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayResult}><Text style={styles.resultText}>{this.state.resultText}</Text></View>
        <View style={styles.displayCalculation}><Text style={styles.calculationText}>Calculations</Text></View>
        
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('7')}><Text style={styles.btnText}>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('8')}><Text style={styles.btnText}>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('9')}><Text style={styles.btnText}>9</Text></TouchableOpacity>
            </View> 
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('4')}><Text style={styles.btnText}>4</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('5')}><Text style={styles.btnText}>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('6')}><Text style={styles.btnText}>6</Text></TouchableOpacity>
            </View>  
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('1')}><Text style={styles.btnText}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('2')}><Text style={styles.btnText}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('3')}><Text style={styles.btnText}>3</Text></TouchableOpacity>
            </View>  
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('.')}><Text style={styles.btnText}>.</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('0')}><Text style={styles.btnText}>0</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn1} onPress={() => this.handleTouch('DEL')}><Text style={styles.btnText}>DEL</Text></TouchableOpacity>
            </View>   
          </View>
          <View style={styles.operators}>
              <TouchableOpacity style={styles.btn2} onPress={() => this.handleOperator('/')}><Text style={styles.btnText}>&divide;</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.handleOperator('*')}><Text style={styles.btnText}>&times;</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.handleOperator('-')}><Text style={styles.btnText}>-</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.handleOperator('+')}><Text style={styles.btnText}>+</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btnEquals} onPress={() => this.handleOperator('=')}><Text style={styles.btnText}>=</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
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
    flex: 7
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

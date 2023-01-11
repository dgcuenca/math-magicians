import './App.css';
import Calculator from './components/calculator';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import Calculator from './components/calculator';
import Navbar from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </>
    );
  }
}

export default App;

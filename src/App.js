import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Home from './pages/home';
import Quote from './pages/quote';

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
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;

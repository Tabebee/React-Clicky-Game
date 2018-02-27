import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//  Components
import Jumbotron from '../src/components/jumbotron';
import Navbar from '../src/components/navbar';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Hello, Welcome to Your first React app.</p>
            <p>Please Edit <code>src/App.js</code> and save to reload.</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

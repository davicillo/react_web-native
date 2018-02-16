import React, { Component } from 'react';
import './App.css';
import {Constants} from 'shared';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sample web-native project</h1>
        </header>
        <p className="App-intro">
          {Constants.Login.title}
        </p>
        <Login />
      </div>
    );
  }
}

export default App


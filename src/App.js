import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { web3 } from "./services/manager";

class App extends Component {
  render() {

    // showBounties = () => {
      // load the contract to get get bounties
        // parse generated json file (generated from solidity)
        // make the call on the contract (getBounties)
        // return the hml list to show the list of bounties

    // }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

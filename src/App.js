import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import './react-d3-library'

class App extends Component {
  // just run react app on development server it will call express already
  render() {
    axios.get("http://localhost/who-am-i").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    // console.log(axios)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          HELLO WORLD!!!
        </p>
      </div>
    );
  }
}

export default App;

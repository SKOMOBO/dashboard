import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import './react-d3-library'

class App extends Component {
  // just run react app on development server it will call express already
  constructor(props){
    super(props);
    this.state={name:"no one"};
  }
 
  componentWillMount(){
    axios.get("http://localhost:81/who-am-i").then(resp=>{
      console.log(resp.data)
      let name = resp.data.first_name + " " + resp.data.last_name;
      this.setState({name});
    }).catch(error=>{
      console.log(error)
    })
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          HELLO {this.state.name}!!!
        </p>
      </div>
    );
  }
}

export default App;

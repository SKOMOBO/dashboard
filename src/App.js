import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import ReactDOM from 'react-dom';

// import axios from 'axios';
// import './react-d3-library'

class App extends Component {
  // just run react app on development server it will call express already

  constructor(props){
    super(props);
    this.state={name:"no one", show_chart:"none"};
  }
 
  // componentWillMount(){
    // ! use this sort of function to pull data from the server, store it in global variables

    // axios.get("http://localhost:81/who-am-i").then(resp=>{
    //   console.log(resp.data)
    //   let name = resp.data.first_name + " " + resp.data.last_name;
    //   this.setState({name});
    // }).catch(error=>{
    //   console.log(error)
    // })
  // }
  
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
        {/* this is a example plotly chart that only gets shown once its finished loading its very slow*/}
        {/*<iframe style={{display: this.state.show_chart}} onLoad ={()=>{this.setState({show_chart:"inline"})}} title="test_chart" src="https://plot.ly/~tsusnjak/12" width="1000px" height="400px"></iframe>*/}
      </div>
    );
  }
}

export default App;

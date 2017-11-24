import React, { Component } from 'react';
import mapbox from 'mapbox-gl/dist/mapbox-gl.js';
import logo from './logo.svg';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
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
 
  
  componentDidMount(){
    
    // var map = new mapbox.Map({
    // container: 'map',
    // style: 'mapbox://styles/mapbox/dark-v9'
    // });
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
    const Map = ReactMapboxGl({
      accessToken : 'pk.eyJ1IjoibWFzc2V5LWRlc2lnbmVyIiwiYSI6ImNqYWRyd2lpbzBtcm4ycXBsaWI0OHRxbzcifQ.tJb630r3fR883YGRpCYYJg',
      touchZoomRotate : false,
      doubleClickZoom : false,
      dragPan : false
    });

    return ( 
      <div className="App">
        {/*<link href='https://api.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          HELLO {this.state.name}!!!
        </p>

        <div style={{paddingLeft:"35vw"}}>
        <Map
        // style="mapbox://styles/mapbox/streets-v9"
        style="mapbox://styles/mapbox/dark-v9"
        center ={[173.19451905919522,-40.879852995838554]}
        zoom={[4]}
        containerStyle={{
          height: "60vh",
          width: "30vw"
        }}>
        
         {/* <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[40.9006, 174.8860]}/>
            {/*<Feature coordinates={[-0.481747846041145, 51.3233379650232]/>
          </Layer>*/}
      </Map>
      </div>
        {/*<div id="map" style={{width:"2000px", height:"500px"}}></div>*/}
        {/* this is a example plotly chart that only gets shown once its finished loading its very slow*/}
        {/*<iframe style={{display: this.state.show_chart}} onLoad ={()=>{this.setState({show_chart:"inline"})}} title="test_chart" src="https://plot.ly/~tsusnjak/12" width="1000px" height="400px"></iframe>*/}
      </div>
    );
  }
}

export default App;

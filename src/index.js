import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { Chart } from "react-d3-core";
// import { LineChart } from "react-d3-basic";

ReactDOM.render(<App />, document.getElementById('root'));

// var width = 700,
// height = 300,
// margins = {left: 100, right: 100, top: 50, bottom: 50},
// title = "User sample",
// // chart series,
// // field: is what field your data want to be selected
// // name: the name of the field that display in legend
// // color: what color is the line
// chartData = [
//   // put your data here!
//   1, 2, 3 ,4 ,5
// ],
// chartSeries = [
//   {
//     field: 'BMI',
//     name: 'BMI',
//     color: '#ff7f0e'
//   }
// ],
// // your x accessor
// x = function(d) {
//   return d.index;
// }

// ReactDOM.render( <Chart
//     title={title}
//     width={width}
//     height={height}
//     margins= {margins}
//     >
//     <LineChart
//       margins= {margins}
//       title={title}
//       data={chartData}
//       width={width}
//       height={height}
//       chartSeries={chartSeries}
//       x={x}
//     />
//   </Chart>, document.getElementById('line-user'))
registerServiceWorker();

// todo setup websocket connection with server, pulls all the stuff from db 
// via websocket connection

// websocket connection should use functions for this so that we can call
// them from http callbacks too

// get react d3 working use this as a scaffold for teo's dashboard probably
// teo's dashboard would have a launch app button that started the app

// this skomobo one would just have a simple login page instead as the landing page
// that starts the react rendering
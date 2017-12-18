import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// hot code reloading based on https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl);

if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      ReactDOM.render(
        <NextApp/>,
        rootEl
      )
    })
  }

registerServiceWorker();



// todo setup websocket connection with server, pulls all the stuff from db 
// via websocket connection

// websocket connection should use functions for this so that we can call
// them from http callbacks too

// get react d3 working use this as a scaffold for teo's dashboard probably
// teo's dashboard would have a launch app button that started the app

// this skomobo one would just have a simple login page instead as the landing page
// that starts the react rendering
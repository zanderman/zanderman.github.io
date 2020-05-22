/**
 * Website Entry Script
 **/

/* Import React modules */
import React from 'react';
import ReactDOM from 'react-dom';

/* Import application component */
import App from './components/App';

/* Render application if container element exists in document */
const container = document.getElementById('container');
container ? ReactDOM.render(<App/>, container) : false;

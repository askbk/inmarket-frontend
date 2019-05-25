// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.jsx';

// Init F7 Vue Plugin
Framework7.use(Framework7React);
// requires
const _ = require('lodash');

// module variables
const config = require('../../config/config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

const port = finalConfig['port'];
const domain = finalConfig['db_domain_name'];
const topDomain = finalConfig['db_top_level_domain'];

//Construct the url for easy access
let url = 'http://' + domain;
if (port !== 80) {
    url += ':' + finalConfig['port'];
}
if (topDomain) {
    url += '.' + topDomain;
}
url += '/api';
finalConfig['url'] = url;

global.gConfig = finalConfig;

// Mount React App
ReactDOM.render(React.createElement(App), document.getElementById('app'));

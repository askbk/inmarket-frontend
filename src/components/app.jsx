import React from 'react';
import {
  App,
  Statusbar,
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

//import components
import Navbar from '../components/Navbar/Navbar';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.myapp', // App bundle ID
        name: 'InMarket', // App name,
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {
            user: {
              firstName: 'John',
              lastName: 'Doe',
            },

          };
        },

        // App routes
        routes: routes,

        // Register service worker
        serviceWorker: this.$device.cordova ? {} : {
          path: '/service-worker.js',
        },

        // Input settings
        input: {
          scrollIntoViewOnFocus: !!this.$device.cordova,
          scrollIntoViewCentered: !!this.$device.cordova,
        },

        // Cordova Statusbar settings
        statusbar: {
          overlay: this.$device.cordova && this.$device.ios || 'auto',
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },

        // Her er viktige tilstander
        isLoggedIn: false,
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params }>
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar></Statusbar>
        <Navbar />
        {/* Right panel with reveal effect*/}
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}

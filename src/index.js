import React from 'react';
import ReactDOM from 'react-dom';
import ViewportSize from "react-viewport-size";
import ReactGA from 'react-ga';

import App from 'pages';
import {ServiceWorker} from 'shared/common';

import 'shared/scss/index.scss';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);


ReactDOM.render(
  <React.Fragment>
    <App />
    <ViewportSize />
  </React.Fragment>,
  document.getElementById('root')
);

ServiceWorker.unregister();

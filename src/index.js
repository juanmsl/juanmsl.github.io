import React from 'react';
import ReactDOM from 'react-dom';
import ViewportSize from "react-viewport-size";
import ReactGA from 'react-ga';

import App from 'pages';
import {ServiceWorker} from 'shared/common';
import 'shared/scss/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);


ReactDOM.render(
  <React.Fragment>
    <App />
    <ViewportSize />
  </React.Fragment>,
  document.getElementById('root')
);

ServiceWorker.unregister();

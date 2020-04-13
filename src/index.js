import React from 'react';
import ReactDOM from 'react-dom';
import ViewportSize from "react-viewport-size";

import App from 'pages';
import {ServiceWorker} from 'shared/common';

import 'shared/scss/index.scss';
import 'animate.css/animate.min.css';


ReactDOM.render(
  <React.Fragment>
    <App />
    <ViewportSize />
  </React.Fragment>,
  document.getElementById('root')
);

ServiceWorker.unregister();

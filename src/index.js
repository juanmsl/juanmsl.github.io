import React from 'react';
import ReactDOM from 'react-dom';
import ViewportSize from "react-viewport-size";

import App from 'pages';
import {ServiceWorker} from 'shared/common';

import 'shared/scss/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ViewportSize />
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.unregister();

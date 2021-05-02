import React from 'react';
import ReactDOM from 'react-dom';
import ViewportSize from "react-viewport-size";
import GA4React from "ga-4-react";

import App from 'pages';
import {ServiceWorker} from 'shared/common';
import 'shared/scss/index.scss';

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const ga4react = new GA4React(process.env.REACT_APP_GOOGLE_ANALYTICS);


const initializeApp = async () => {
  await ga4react.initialize();
  ReactDOM.render(
    <React.Fragment>
      <App/>
      <ViewportSize/>
    </React.Fragment>,
    document.getElementById('root')
  );
};

initializeApp();
ServiceWorker.unregister();

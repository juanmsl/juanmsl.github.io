import React from 'react';
import {useGA4React} from "ga-4-react";
import {BrowserRouter, Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Home from "pages/home";
import About from "pages/about";
import Services from "pages/services";
import Portfolio from "pages/portfolio";
import RouterDomHandler from 'react-router-dom-handler';


const App = () => {
  const ga = useGA4React();

  const routes = [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/about',
      component: About,
      exact: true
    },
    {
      path: '/services',
      component: Services,
      exact: true
    },
    {
      path: '/portfolio',
      component: Portfolio,
      exact: true
    },
    {
      path: '',
      redirect: '/'
    }
  ];

  return (
    <BrowserRouter>
      <Route render={({location}) => {
        if (ga) {
          ga.pageview(location.pathname, location.pathname, 'Home');
          ga.gtag('event', 'pageview', location.pathname)
        }

        return (
          <TransitionGroup className='transition-group'>
            <CSSTransition
              key={location.key}
              timeout={{enter: 300, exit: 300}}
              classNames="fade"
            >
              <RouterDomHandler
                location={location}
                routes={routes}
              />
            </CSSTransition>
          </TransitionGroup>
        );
      }}/>
    </BrowserRouter>
  );
};

export default App;
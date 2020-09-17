import React from 'react';
import ReactGA from 'react-ga';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Home from "pages/home";


const App = () => (
    <BrowserRouter>
        <Route render={({location}) => {
            ReactGA.set({ page: location.pathname });
            ReactGA.pageview(location.pathname);

            return (
                <TransitionGroup className='transition-group'>
                    <CSSTransition
                        key={location.key}
                        timeout={{enter: 300, exit: 300}}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route path='/' exact>{Home}</Route>
                            {/*<Route path='/about' exact>{About}</Route>*/}
                            {/*<Route path='/services' exact>{Services}</Route>*/}
                            {/*<Route path='/portfolio' exact>{Portfolio}</Route>*/}
                            {/*<Route path='/blog' exact>{Blog}</Route>*/}
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            );
        }}/>
    </BrowserRouter>
);

export default App;
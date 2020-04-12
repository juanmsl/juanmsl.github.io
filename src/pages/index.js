import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Home from "pages/home";
import About from "pages/about";
import Services from "pages/services";
import Portfolio from "pages/portfolio";
import Blog from "pages/blog";


const App = () => (
    <BrowserRouter>
        <Route render={({location}) => (
            <TransitionGroup className='transition-group'>
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 300, exit: 300}}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route path='/' exact>{Home}</Route>
                        <Route path='/about' exact>{About}</Route>
                        <Route path='/services' exact>{Services}</Route>
                        <Route path='/portfolio' exact>{Portfolio}</Route>
                        <Route path='/blog' exact>{Blog}</Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>
    </BrowserRouter>
);

export default App;
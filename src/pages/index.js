import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "pages/home";
import About from "pages/about";
import Services from "pages/services";
import Portfolio from "pages/portfolio";
import Blog from "pages/blog";


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact>{Home}</Route>
            <Route path='/about' exact>{About}</Route>
            <Route path='/services' exact>{Services}</Route>
            <Route path='/portfolio' exact>{Portfolio}</Route>
            <Route path='/blog' exact>{Blog}</Route>
        </Switch>
    </BrowserRouter>
);

export default App;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mainpage from './mainpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Portfolio from './portfolio';
import Cv from './cv';
import Map from './map';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/cv" component={Cv} />
        <Route path="/map" component={Map} />
    </Switch>
)

export default Main;
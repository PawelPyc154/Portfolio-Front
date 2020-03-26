import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';

export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

export default Pages;

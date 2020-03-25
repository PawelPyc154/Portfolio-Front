import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';

export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Pages;

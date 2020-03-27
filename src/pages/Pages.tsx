import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';

import Loading from '../loading/Loading';

const Contact = React.lazy(() => import('./contact/Contact'));
const Projects = React.lazy(() => import('./projects/Projects'));
export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
  </Suspense>
);

export default Pages;

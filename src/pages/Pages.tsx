import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';

import Loading from '../loading/Loading';

const Contact = React.lazy(() => import('./contact/Contact'));
export interface PagesProps {}

const Pages: React.SFC<PagesProps> = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </Suspense>
);

export default Pages;

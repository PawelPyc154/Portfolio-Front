import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navigation from './navigation/Navigation';
import Pages from './pages/Pages';

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />

        <Pages />
      </Router>
    </Suspense>
  );
}

export default App;

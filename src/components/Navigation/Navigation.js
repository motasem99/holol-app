import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './Routers';

function Navigation() {
  return (
    <Router>
      <main>
        <Routers />
      </main>
    </Router>
  );
}

export default Navigation;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

export default function LandingPage() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </Router>
  );
}
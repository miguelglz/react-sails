import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './features/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
  	<BrowserRouter>
	    <LandingPage/>
	</BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
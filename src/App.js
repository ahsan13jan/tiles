import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Details from './components/pages/Details'

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/details' exact component={Details}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

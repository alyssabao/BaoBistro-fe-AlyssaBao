import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/order" component={Order}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
      
    </div>
);
}

export default App;

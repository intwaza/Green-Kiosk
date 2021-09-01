import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Vegetables from './vegetable';
import Product from './Product';
import Fruits from './Fruit.js';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="navbar">
            <Link to="/" style={{textDecoration:"none", color:'green'}}><li>Product</li></Link>
            <Link to="/fruits" style={{textDecoration:"none", color:'green'}}><li>Fruit</li></Link>
            <Link to="/vegetables" style={{textDecoration:"none", color:'green'}}><li>Vegetable</li></Link>

          </ul>
        </nav>
        <Route path="/" exact component = {Product}/>
        <Route path="/fruits" exact component = {Fruits}/>
        <Route path="/vegetables" exact component = {Vegetables}/>   
         </Router>
    </div>
  );
}

export default App;
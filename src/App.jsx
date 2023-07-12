import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Route, Switch } from 'react-router-dom';


const App = () => (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" component={Blog} />
      </Switch>
    </div>
  );


export default App;

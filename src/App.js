import React from 'react';
import Home from './components/Home';
import Blog from './components/Blog';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog/:maqola" component={Blog}>
          </Route>
        </Switch>
    </Router>
  );
}
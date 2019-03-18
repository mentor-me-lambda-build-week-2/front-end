import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Dashboard exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
  )
}

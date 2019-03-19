import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';

export default function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Dashboard exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
  )
}

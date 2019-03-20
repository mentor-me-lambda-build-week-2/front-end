import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Register from './Register';
import Dashboard from './Dashboard/Dashboard'


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
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
  )
}

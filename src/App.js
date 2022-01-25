import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (

    <div className="App">
      <h2>Client Auth Project</h2>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>  
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} /> 
        </Switch>
    </div>

  );
}

export default App;

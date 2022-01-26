import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Other from './components/Other';
import FriendsList from './components/Friends';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import AddFriend from './components/AddFriend'


//Login Component in this file due to Webpack issues
class Login extends React.Component {
  state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
  handleChange=e=>{
      this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
      })
  }

  login = e => {
      e.preventDefault();
      console.log(this.state.credentials)

      axios.post('http://localhost:9000/api/login', this.state.credentials)
          .then(resp=> {
              console.log(resp);
              localStorage.setItem("token", resp.data.token);
              this.props.history.push('./protected')
          })
          .catch(error=>{console.log(error)});
  };
    
  render(){
      return (
          <div> 
              <form onSubmit={this.login}>
                  <input 
                      type="text"
                      name = "username"
                      value ={this.state.credentials.username}
                      onChange = {this.handleChange}
                  />
                  <input 
                      type="text"
                      name = "password"
                      value ={this.state.credentials.password}
                      onChange = {this.handleChange}
                   /> 
                   <button>Submit</button>
              </form>
          </div>
      )
  }
};

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
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>  
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList}/> 
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} /> 
          <Route path="/logout" component={Logout} />
        </Switch>
    </div>

  );
}

export default App;

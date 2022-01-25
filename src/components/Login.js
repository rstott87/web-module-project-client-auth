import React from "react";

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

export default Login; 
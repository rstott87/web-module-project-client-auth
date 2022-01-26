import React from "react";

import axiosWithAuth from '../utils/axiosWithAuth'
import AddFriend from "./AddFriend";


class FriendsList extends React.Component {
    state = {
        friends: [{}]
    };

    componentDidMount(){
        axiosWithAuth()
            .get('/friends')
            .then(resp=>{
                console.log(resp)
                this.setState({
                    ...this.state,
                    friends: resp.data,
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        const listFriends = this.state.friends.map((e)=>
        <li key={e.name}> 
            {`${e.name}  -  ${e.email}`}
        </li>)
        return(
            <div>
                <h2>FRIENDS LIST</h2>
                <ul>{listFriends}</ul>
                <AddFriend></AddFriend>
            </div>
        )
    }
};

export default FriendsList;
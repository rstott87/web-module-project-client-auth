import React from "react";



class AddFriend extends React.Component {
    state = {
        nothing: []
    };
    render(){
        return(<div>
                <form>
                    <h3>ADD A FRIEND </h3>
                    <input 
                        type="text"
                    />
                    <input 
                        type="text"
                /> 
                <button>Submit</button>
            </form>
    </div>
        )
    }
}

export default AddFriend;
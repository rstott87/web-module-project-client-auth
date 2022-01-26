import React from "react";
import {useState} from 'react';
import axios from "axios";

import { useHistory } from 'react-router-dom';



const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange=(e)=>{
        setForm({
                ...form,
                [e.target.name]: e.target.value
            });
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); 
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers: { 
                authorization: token
            }
        })
        .then(resp=>{
            push('/friends')
        })
        .catch(error=>{console.log(error)})
    }

        return(<div>
                 <h3>ADD A FRIEND </h3>
                 <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input onChange={handleChange} name={"name"} type="text" />
                    </div>    
                    <div>
                        <label htmlFor="">Age:</label>
                        <input  onChange={handleChange} name={"age"} type="text" />
                    </div>        
                    <div>
                        <label htmlFor="">Email:</label>
                        <input  onChange={handleChange} name={"email"}type="text" />
                    </div>        
                    <button>Submit</button>
                </form>
    </div>
        )  
}

export default AddFriend;
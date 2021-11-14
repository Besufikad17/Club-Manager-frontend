import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState({username:'', password:''})
    const navigate = useNavigate()
    const submit = e => {
        e.preventDefault()
        console.log(user)
        axios.post(`http://localhost:3000/login`, user)
            .then((response) => {
                navigate("/")
            })
            .catch((error) => {
                alert("Incorrect password or user doesn't exist")
            });
      }
    
    return(
       <div>
           <div className="container">
               <div className="header">Login</div>
               <div className="body">
                   <div className="form">
                       <div className="form-group">
                           <label htmlFor="username">Username</label>
                           <input type="text" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} placeholder="username"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="password">Password</label>
                           <input type="password"  value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} placeholder="password"/>
                       </div>
                   </div>
               </div>
               <div className="footer">
                   <button type="submit" className="btn" value="submit" onClick={submit}>
                       Login
                   </button>
               </div>
           </div>
       </div>
    )
}

export default Login;
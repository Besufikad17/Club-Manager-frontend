import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Register = () => {

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();
    var isLogged = false
    var mlist = []

    const submit = e => {
        e.preventDefault()
        console.log(user)
        axios.post(`http://localhost:3000/signup`, user)
            .then((response) => {
               isLogged = true
                navigate("/")
            })
            .catch((error) => {
               alert("error occurred in ur inputs")
            });
    }

    return(
        <div className="container">
        <div className="header">Register</div>
        <div className="body">
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}/>
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn" onClick={submit}>
                Register
            </button>
        </div>

    </div>
    )
}

export default Register;
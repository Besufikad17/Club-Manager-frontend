import React, {Component} from 'react';
import img from './assets/logo.png';
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div className="header-main">
                <div href="#default" className="logo"> <img src={img} alt="" width={55} height={50}/> </div>

                <div className="header-right">
                    <Link to="/" ><a>Home</a></Link>
                    <Link to="/about" ><a>About</a></Link>
                    <Link to="/contact" ><a>Contact</a></Link>
                    <Link to="/posts" ><a>Posts</a></Link>
                    <Link to="/login" ><a>Login</a></Link>
                    <Link to="/register" ><a>Register</a></Link>
                </div>
            </div>
        );
    }
}
export default Header;
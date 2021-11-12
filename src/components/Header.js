import React, {Component} from 'react';
import style from './assets/style.css';
import img from './assets/logo.png';
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        const mystyle = {
            header:{
                color: "white",
                backgroundColor: "#082A45",
                padding: "10px",
                fontFamily: "Arial"
            },
            container:{
                width:"80%",
                marigin:"auto",
                overflow:"hidden"
            },

            div:{
                float:"right",
                position: "absolute",
                width:"100%"
            },
            a:{
                textDecoration: "none",
                position: "relative",
                left: "60%",
                top: "-50px",
                color: "white",
                padding: "20px"
            }
          };


        return(
           <div style={mystyle.header}>
               <div style={mystyle.container}>
                    <div>
                        <h1>CSEC Club Management</h1>
                        {/* <img src={img} alt="" width={55} height={50}/> */}
                    </div>
                    <div style={mystyle.div}>
                        <Link to="/" style={mystyle.a}>Home</Link>
                        <Link to="/" style={mystyle.a}>About</Link>
                        <Link to="/" style={mystyle.a}>Contact</Link>
                        <Link to="/" style={mystyle.a}>Posts</Link>
                        <Link to="/" style={mystyle.a}>Login</Link>
                        <Link to="/" style={mystyle.a}>Register</Link>
                    </div>
               </div>
           </div>
        );
    }
}
export default Header;
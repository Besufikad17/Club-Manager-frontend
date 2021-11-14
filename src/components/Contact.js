import React, {useState}  from 'react';
import Header from './Header';
import Footer from './Footer';
import '../components/assets/style.css';
import axios from "axios";
import img from "./assets/contact-bg.jpg";

const Contact = () => {
    const [data, setData] = useState({email : "", subject : "", message: ""})

    const submit = e => {
        e.preventDefault()
        console.log(data)
        alert("sucessfully sent")
        axios.post(`http://localhost:3000/submit`, data)
            .then((response) => {
               alert(response.data)
            })
            .catch((error) => {
                alert("Incorrect password or user doesn't exist")
            });
    }

    return(
        <div>
            <Header/>
            <div>
                <img alt="" src={img} style={{maxWidth: "100%", height:"auto"}}/>
            </div>
            <div className="container">
                <div className="header">Contact Us</div>
                <div className="body">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text"  value={data.subject} onChange={e => setData({ ...data, subject: e.target.value })} placeholder="subject"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea  value={data.message} onChange={e => setData({ ...data, message: e.target.value })} placeholder="message"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn" value="submit" onClick={submit}>
                        Submit
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import "../components/assets/style.css";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import img from '../components/assets/logo.png';

function Footer() {
  return (
      <footer className="footer-distributed">

        <div className="footer-left">
          <img src={img} />
            <h3>About<span>CESC ASTU</span></h3>

            <p className="footer-links">
              <Link to="/"><a>Home</a></Link>
              |
              <Link to="/about"><a>About</a></Link>
              |
              <Link to="/contact"><a>Contact</a></Link>
            </p>

            <p className="footer-company-name">© 2021 CSEC ASTU.</p>
        </div>

        <div className="footer-center">
          <div>
            <p><span>Adama Science and Technology University,</span>
              Bldg. No. 508, Lab #9</p>
          </div>
          <div>
            <p>+251</p>
          </div>
          <div>
            <p><a href="#">support@csecastu.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the club</span>
            We offer training and skill building courses across Technology, Design, Management, Science and Humanities.
          </p>
            <i className="footer-icons"><a href="https://t.me/CSEC_ASTU"><FaTelegram/></a></i>
            <i className="footer-icons"><a href="https://ift.tt/2PEWePp"><FaFacebook/></a></i>
        </div>
      </footer>
      );
}

export default Footer;

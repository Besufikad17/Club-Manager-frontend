import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import bg from '../components/assets/bg7.jpg';
import {Link} from "react-router-dom";
import img2 from "./assets/bg2.jpg";
import img3 from "./assets/bg3.jpeg";
import img4 from "./assets/bg4.jpg";


class About extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <img className="bg" alt="" src={bg} />
                    <h1 className="p">CSEC: Computer Science and Engineering Club-ASTU</h1>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <li className='cards__item'>
                                <div className='cards__item__link'>
                                    <figure className='cards__item__pic-wrap' data-category="Divisons">
                                        <img
                                            className='cards__item__img'
                                            alt='about'
                                            src={img2}
                                        />
                                    </figure>
                                    <div className='cards__item__info'>
                                        <h5 className='cards__item__text'>Software Development Divison</h5>
                                        <p className="paragraph">Division working on Software Development by providing tutorials,
                                            seminars and working on projects.</p>
                                    </div>
                                </div>
                            </li>
                            <li className='cards__item'>
                                <Link className='cards__item__link' to="/about">
                                    <figure className='cards__item__pic-wrap' data-category="Divisons">
                                        <img
                                            className='cards__item__img'
                                            alt='about'
                                            src={img3}
                                        />
                                    </figure>
                                    <div className='cards__item__info'>
                                        <h5 className='cards__item__text'>Competitive Programming Divison</h5>
                                        <p className="paragraph">Divison working on competitive programming by providing tutorials, seminars
                                            and contest based approach to create competent international contestants.</p>
                                    </div>
                                </Link>
                            </li>
                            <li className='cards__item'>
                                <Link className='cards__item__link' to="/about">
                                    <figure className='cards__item__pic-wrap' data-category="Divisons">
                                        <img
                                            className='cards__item__img'
                                            alt='about'
                                            src={img4}
                                        />
                                    </figure>
                                    <div className='cards__item__info'>
                                        <h5 className='cards__item__text'>Capacity Building Division</h5>
                                        <p className="paragraph">Divison working on providing tutorials and seminars to
                                            teach and create awareness the university community. Additionally it works as
                                            communication body of the club.</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            <Footer/>
            </div>
        )
    }
}

export default About;
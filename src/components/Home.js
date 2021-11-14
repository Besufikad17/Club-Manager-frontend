import React from 'react';
import Header from './Header';
import Footer from './Footer';
import img from './assets/bg.jpg';
import img2 from './assets/bg2.jpg';
import img3 from './assets/bg3.jpeg';
import img4 from './assets/bg4.jpg';
import post from './assets/post1.jpg';
import post2 from './assets/post2.jpg';
import post3 from './assets/post3.jpg';
import post4 from './assets/post4.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <Header/>
            <div>
                <div>
                    <img className="bg" alt="" src={img} />
                    <p className="p">Think - Create - Solve</p>
                </div>
                <div>

                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/about">
                                        <figure className='cards__item__pic-wrap' data-category="Divisons">
                                            <img
                                                className='cards__item__img'
                                                alt='about'
                                                src={img2}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Software Development Divison</h5>
                                        </div>
                                    </Link>
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
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className='cards__items'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap' data-category="Posts">
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>C++ Programming Tutorial</h5>
                                            <h6>Date: Saturday, 13 November 2021</h6>
                                            <h6>Time: 2:45 Pm</h6>
                                            <h6>Venue: Block 513 (Space)</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap' data-category="Posts">
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post2}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Software Development Division Orientation</h5>
                                            <h6>Date: Thursday, 12 November 2021</h6>
                                            <h6>Time: 11 local time</h6>
                                            <h6>Venue: B-508 R-9 </h6>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className='cards__items'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap' data-category="Posts">
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post3}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Seminar</h5>
                                            <h6>Date:  Wedensday,November 10, 2021</h6>
                                            <h6>Time: 11:00  Local time</h6>
                                            <h6>Venue: B-508 R-9</h6>
                                            <h6>Presenter: Yonathan Assefa</h6>
                                            <h6>Title :  Git  + Github:  a Social Network for Programmers</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap' data-category="Posts">
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post4}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Be part of Algo Queen!
                                                This is girls 👩‍💻 only competitive programming contest, as an
                                                initiative to encourage girls to participate in Problem Solving and Competitive Programming.</h5>
                                            <h5 className='cards__item__text'>👩 Girls Learning Coding is the key to a Bright Future.
                                                🦾 It's good to be in position to win.
                                                Join and Participate. </h5>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
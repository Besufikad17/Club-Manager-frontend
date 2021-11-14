import React from 'react';
import Header from './Header';
import post from './assets/post1.jpg';
import post2 from './assets/post2.jpg';
import post3 from './assets/post3.jpg';
import post4 from './assets/post4.jpg';
import post5 from './assets/post5.jpg';
import post6 from './assets/post7.jpg';
import post7 from './assets/post8.jpg';
import post8 from './assets/post9.jpg';
import img from "./assets/bg6.jpg";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const Posts = () => {
    return(
        <div>
            <Header/>
            <div>
                <div>
                    <img className="bg" alt="" src={img} />
                    {/*<p className="p">Posts</p>*/}
                </div>
                <div>

                    <div className='cards__container'>
                        <div className='cards__wrapper'>
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
                            </ul>
                            <ul className='cards__items'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap'>
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post4}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Be part of Algo Queen! </h5>
                                                <h6>This is girls 👩‍💻 only competitive programming contest, as an
                                                    initiative to encourage girls to participate in Problem Solving and Competitive Programming.</h6>
                                            <h6>👩 Girls Learning Coding is the key to a Bright Future.
                                                🦾 It's good to be in position to win.
                                                Join and Participate. </h6>
                                        </div>
                                    </Link>
                                </li>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap'>
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post5}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>
                                                CSEC Development division registration is opened now.</h5>
                                            <h6> You can register by clicking Here <a href="https://forms.gle/AyS4AvtgUqEUPY6q8">(https://forms.gle/AyS4AvtgUqEUPY6q8)</a>.
                                                The registration will be closed Mon,  8 Nov 2021.
                                            </h6>
                                            <h6>Direct registration <a href="https://forms.gle/AyS4AvtgUqEUPY6q8">Link</a></h6>
                                        </div>
                                    </Link>
                                </li>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap'>
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post6}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>|CSEC Capacity Building</h5>
                                            <h6>CSEC Capacity Building want's to apologize for the ASTU community for
                                                removing it's tutorial videos from it's YouTube Channel due to some technical issues.
                                                And we would love to assure you that this will never happen again. </h6>
                                            <h6>This <a href="https://www.youtube.com/channel/UCEh1z4tpnDYMvXeyAeoWlBg">YouTube Channel</a> is the official CSEC Capacity building's channel.
                                                Subscribe + hit the bell icon for updates and put your questions, suggestions and any kinds of improvements you want on the comment section. </h6>
                                            <h6>>  Get C++ Tutorial Videos <a href="https://www.youtube.com/playlist?list=PL21w8R_HdURav7GsKBba_ZI5lTMHHK4yl">Here</a></h6>
                                            <h6>>  Subscribe our Channel <a href="https://www.youtube.com/channel/UCEh1z4tpnDYMvXeyAeoWlBg">Here</a></h6>
                                            <h6>"Let's make our community a better place to learn!"</h6>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className='cards__items'>

                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap'>
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post7}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Seminar</h5>
                                            <h6>Date:  Wedensday,November 3, 2021 </h6>
                                            <h6>Time: 11:00  Local time</h6>
                                            <h6>Venue: B-508 R-9</h6>
                                            <h6>Presenter: Nesru Sadik</h6>
                                            <h6>Title :   What is Arduino ?</h6>
                                        </div>
                                    </Link>
                                </li>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to="/posts">
                                        <figure className='cards__item__pic-wrap'>
                                            <img
                                                className='cards__item__img'
                                                alt='posts'
                                                src={post8}
                                            />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>Bruh Startup Acceleration
                                                #showcase is happening on coming Friday afternoon October 22nd 12:00 - 5:00 P.M at
                                                Creative Hub Infront of Wabi Shebelle Hotel, Mexico Rd.</h5>
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

export default Posts;
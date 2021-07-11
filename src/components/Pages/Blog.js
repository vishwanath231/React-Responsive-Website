import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import IMG1 from '../../images/B-1.jpg'
import IMG2 from '../../images/B-2.jpg'
import IMG3 from '../../images/B-3.jpg'


function Blog() {


    return (
        <>
            <div className="container">
                <div className="max-width">
                    <div className="blog_section">
                        <div className="box_section" style={{marginBottom:"3rem"}}>
                                <img src={IMG1} alt="" className="header_img" />
                            <div className="inner_Box">
                                <h2 className="title">Covid-19 threatens the next generation of smartphones</h2>
                                <div className="info">
                                    <ul className="flex">
                                        <li><i className="fas fa-calendar-check"></i>&nbsp; April 6,2021</li>
                                        <li><i className="far fa-user"></i>&nbsp; admin</li>
                                        <li><i className="fas fa-book"></i>&nbsp; Strategy</li>
                                    </ul>
                                </div>
                                <p className="content">We denouce with rightous indigue nationa and dislike men who are sp beguiled and demo realized by the charns of pleasure of the moment, sp bllinded by desire, that.</p>
                                <Link className="button">Continue Reading &nbsp;<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="box_section" style={{marginBottom:"3rem"}}>
                                <img src={IMG2} alt="" className="header_img" />
                            <div className="inner_Box">
                                <h2 className="title">Covid-19 threatens the next generation of smartphones</h2>
                                <div className="info">
                                    <ul className="flex">
                                        <li><i className="fas fa-calendar-check"></i>&nbsp; April 6,2021</li>
                                        <li><i className="far fa-user"></i>&nbsp; admin</li>
                                        <li><i className="fas fa-book"></i>&nbsp; Strategy</li>
                                    </ul>
                                </div>
                                <p className="content">We denouce with rightous indigue nationa and dislike men who are sp beguiled and demo realized by the charns of pleasure of the moment, sp bllinded by desire, that.</p>
                                <Link className="button">Continue Reading &nbsp;<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="box_section">
                                <img src={IMG3} alt="" className="header_img" />
                            <div className="inner_Box">
                                <h2 className="title">Covid-19 threatens the next generation of smartphones</h2>
                                <div className="info">
                                    <ul className="flex">
                                        <li><i className="fas fa-calendar-check"></i>&nbsp; April 6,2021</li>
                                        <li><i className="far fa-user"></i>&nbsp; admin</li>
                                        <li><i className="fas fa-book"></i>&nbsp; Strategy</li>
                                    </ul>
                                </div>
                                <p className="content">We denouce with rightous indigue nationa and dislike men who are sp beguiled and demo realized by the charns of pleasure of the moment, sp bllinded by desire, that.</p>
                                <Link className="button">Continue Reading &nbsp;<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Blog;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import IMG1 from '../../images/svg-1.svg';
import IMG2 from '../../images/profile.jpg';
import IMG3 from '../../images/svg-2.svg';
import IMG4 from '../../images/svg-3.svg';
import Footer from './Footer';


function Home() {
    return (
        <>
            {/* HEADER SECTION */}
            <div className="header_section header-bg">
                <div className="grid">
                    <div className="Bx-1">
                        <h4 className="titles">marketing agency</h4>
                        <h2 className="head_title">Lead Generation Specialist for Online Buinesses</h2>
                        <p className="summary">We help buiness owners increase their revenue. Our team of unique specialist can help you achieve your business goals.</p>
                        <Link className="btn">get started</Link>
                    </div>
                    <div className="Bx-2">
                        <img src={IMG1} alt="" className="header_section-img" />
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="about_section">
                <div className="grid">
                    <div className="Bx-1">
                        <img src={IMG2} alt="" className="about_section-img" />
                    </div>
                    <div className="Bx-2">
                        <h4 className="titles">Sarah Jeni.</h4>
                        <h2 className="head_title"> Ultra helped mw increase my revenue by over 3X in less than 3 months!</h2>
                        <p className="summary">Their team is wonderful! can't belive i didn't start working with them earlier.</p>
                        <Link className="btn">View Case Study</Link>
                    </div>
                </div>
            </div>

            {/* HEADER SECTION 2 */}
            <div className="header_section" style={{paddingTop:"50px"}}>
                <div className="grid">
                    <div className="Bx-1">
                        <h4 className="titles">instant setup</h4>
                        <h2 className="head_title">Extermely Quick Onboarding Process </h2>
                        <p className="summary">Once you've joined, our team of specialist will reach out to you and get you set up in minutes.  </p>
                        <Link className="btn">learn more</Link>
                    </div>
                    <div className="Bx-2">
                        <img src={IMG3} alt="" className="header_section-img" />
                    </div>
                </div>
            </div>


            {/* PRICING SECTION */}
            <div className="pricing_section">
               <div className="pricing_head">Our Services</div>
                <div className="grid_section">
                    <div className="Box_section">
                        <div className="icon">
                            <i className="fas fa-bicycle"></i>
                        </div>
                        <div className="pricing_title">Starter Pack</div>
                        <div className="price">$99.99</div>
                        <div className="month">per month</div>
                        <div className="products">
                            <p>100 New Users</p>
                            <p>$10,000 Budget</p>
                            <p>Retargeting analytics</p>
                        </div>
                        <Link className="plan">Choose Plan</Link>
                    </div>
                    <div className="Box_section">
                        <div className="icon">
                            <i className="fas fa-motorcycle"></i>
                        </div>
                        <div className="pricing_title">Gold Rush</div>
                        <div className="price">$299.99</div>
                        <div className="month">per month</div>
                        <div className="products">
                            <p>1000 New Users</p>
                            <p>$50,000 Budget</p>
                            <p>Lead Den Analytics</p>
                        </div>
                        <Link className="plan">Choose Plan</Link>
                    </div>
                    <div className="Box_section">
                        <div className="icon">
                            <i className="fas fa-car"></i>
                        </div>
                        <div className="pricing_title">Diamond Kings</div>
                        <div className="price">$999.99</div>
                        <div className="month">per month</div>
                        <div className="products">
                            <p>Unlimited Users</p>
                            <p>Unlimited Budget</p>
                            <p>24/7 Support</p>
                        </div>
                        <Link className="plan">Choose Plan</Link>
                    </div>
                
                </div>
            </div>


            {/* HEADER SECTION 2 */}
            <div className="header_section header" style={{paddingTop:"50px"}}>
                <div className="grid">
                    <div className="Bx-2">
                        <img src={IMG4} alt="" className="header_section-img" />
                    </div>
                    <div className="Bx-1">
                        <h4 className="titles">secure database</h4>
                        <h2 className="head_title">All you data is stored on our secure server</h2>
                        <p className="summary">You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.</p>
                        <Link className="btn">Sign Up Now</Link>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Home;

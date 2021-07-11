import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="max-width">
                    <div className="subscribe_section">
                        <h2>Join our exclusive membership to receive the latest news and trends</h2>
                        <p>You can unsubscribe at any time</p>
                        <form className="form">
                            <input type="text" placeholder="Enter Your Email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="footer_section">
                        <ul>
                            <li><h2>About Us</h2></li>
                            <li><Link className="link">How it works</Link></li>
                            <li><Link className="link">Testimonials</Link></li>
                            <li><Link className="link">Careers</Link></li>
                            <li><Link className="link">Investor</Link></li>
                            <li><Link className="link">Terms of Service</Link></li>
                        </ul>
                        <ul>
                            <li><h2>Contact Us</h2></li>
                            <li><Link className="link">Contact</Link></li>
                            <li><Link className="link">Support</Link></li>
                            <li><Link className="link">Destinations</Link></li>
                            <li><Link className="link">Sponsorships</Link></li>
                        </ul>
                        <ul>
                            <li><h2>Videos</h2></li>
                            <li><Link className="link">Submit Video</Link></li>
                            <li><Link className="link">Ambassadors</Link></li>
                            <li><Link className="link">Agency</Link></li>
                            <li><Link className="link">Influencer</Link></li>
                        </ul>
                        <ul>
                            <li><h2>Social Media</h2></li>
                            <li><Link className="link">Facebook</Link></li>
                            <li><Link className="link">Instagram</Link></li>
                            <li><Link className="link">Youtube</Link></li>
                            <li><Link className="link">Twitter</Link></li>
                        </ul>
                    </div>
                    <div className="last_section">
                        <div className="logo">
                           <Link to="/" className="links"><i className="fas fa-rocket"></i>ULTRA</Link>
                        </div>
                        <p>ULTRA &copy; 2020</p>
                        <div className="icon">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer;

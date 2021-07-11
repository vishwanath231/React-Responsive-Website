import React from 'react';
import './Services.css'
import IMG1 from '../../images/S-1.png'
import IMG2 from '../../images/S-2.png'
import IMG3 from '../../images/S-3.png'
import IMG4 from '../../images/S-4.png'
import IMG5 from '../../images/S-5.png'
import IMG6 from '../../images/S-6.png'
import IMG7 from '../../images/S-7.png'
import IMG8 from '../../images/S-8.png'


function Services() {
    return (
        <>
            <div className="containers">
                <div className="max-width">
                    <div className="service_grid">
                        <div className="Box background">
                            <img src={IMG1} alt="" className="service_img" />
                            <h2 className="title">Business Analysis</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box ">
                            <img src={IMG2} alt="" className="service_img" />
                            <h2 className="title">Reports Analysis</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box ">
                            <img src={IMG3} alt="" className="service_img" />
                            <h2 className="title">Profit Planning</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box background">
                            <img src={IMG4} alt="" className="service_img" />
                            <h2 className="title">Project Reporting</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box background">
                            <img src={IMG5} alt="" className="service_img" />
                            <h2 className="title">Estate Planning</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box">
                            <img src={IMG6} alt="" className="service_img" />
                            <h2 className="title">Security Enhanced</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box">
                            <img src={IMG7} alt="" className="service_img" />
                            <h2 className="title">Cloud Computing</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                        <div className="Box background">
                            <img src={IMG8} alt="" className="service_img" />
                            <h2 className="title">Cryptocurrency</h2>
                            <p className="content">We always provide people a complete solution focused of any business.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Services;

import React from 'react'
import { RiPlayCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="about-outer">
                <div className="bg-layer"></div>
                <div className="anim-icon">
                    <div className="icon-1"></div>
                    <div className="icon-2"></div>
                    <div className="icon-3"></div>
                </div>
                <div className="container">
                    <div className="row about-inner">
                        <div className="col-lg-6 col-sm-12 item">
                            <div className="item-inner">
                                <div className="img-content">
                                    <div className="image">
                                        <img src="assets/img/about-4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="text-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida.</p>
                                    <h3>Find Your Best <br />Destination</h3>
                                    <Link to=""><RiPlayCircleLine /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 item">
                            <div className="item-inner">
                                <div className="heading">
                                    <p>About travio</p>
                                    <h2>Best Travel Agency Since 2008.</h2>
                                </div>
                                <div className="image">
                                    <img src="assets/img/about-5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

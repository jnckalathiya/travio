import React from 'react'
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaLocationDot, FaMicrophone, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 .item">
                                <div className="logo-inner">
                                    <div className="logo">
                                        <img src="assets/img/footer-logo.png" alt="" />
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
                                    </div>
                                    <ul className='social-link'>
                                        <li>
                                            <Link to='https://www.facebook.com/'><FaFacebookF /></Link>
                                        </li>
                                        <li>
                                            <Link to='https://x.com/'><FaXTwitter /></Link>
                                        </li>
                                        <li>
                                            <Link to='https://www.instagram.com/'><FaInstagram /></Link>
                                        </li>
                                        <li>
                                            <Link to='https://www.google.com/'><FaGooglePlusG /></Link>
                                        </li>
                                        <li>
                                            <Link to='https://www.linkedin.com/'><FaLinkedinIn /></Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 .item">
                                <div className="link-inner">
                                    <div className="title">
                                        <h3>Services</h3>
                                    </div>
                                    <ul className='link-list'>
                                        <li><Link to=''>About Us</Link></li>
                                        <li><Link to=''>Listing</Link></li>
                                        <li><Link to=''>How It Works</Link></li>
                                        <li><Link to=''>Our Services</Link></li>
                                        <li><Link to=''>Our Blog</Link></li>
                                        <li><Link to=''>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 .item">
                                <div className="gallery-inner">
                                    <div className="title">
                                        <h3>Gallary</h3>
                                    </div>
                                    <ul className='image-list'>
                                        <li>
                                            <div className="img-content">
                                                <Link to=''><img src="assets/img/footer-gallery-1.jpg" alt="" /></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <Link to=''><img src="assets/img/footer-gallery-2.jpg" alt="" /></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <Link to=''><img src="assets/img/footer-gallery-3.jpg" alt="" /></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <Link to=''><img src="assets/img/footer-gallery-4.jpg" alt="" /></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <Link to=''><img src="assets/img/footer-gallery-5.jpg" alt="" /></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <Link to=''><img src="assets/img/footer-gallery-6.jpg" alt="" /></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 .item">
                                <div className="contact-inner">
                                    <div className="title">
                                        <h3>Contacts</h3>
                                    </div>
                                    <ul className="contact-list">
                                        <li>
                                            <FaLocationDot />
                                            <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                                        </li>
                                        <li>
                                            <FaMicrophone />
                                            <p><Link to=''>+2(305) 587-3407</Link></p>
                                        </li>
                                        <li>
                                            <FaEnvelope />
                                            <p><Link to=''>info@example.com</Link></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="item">
                                <p><Link to=''>Travio</Link> © 2021 All Right Reserved</p>
                            </div>
                            <ul className="item">
                                <li><Link to=''>Terms of Service</Link></li>
                                <li><Link to=''>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

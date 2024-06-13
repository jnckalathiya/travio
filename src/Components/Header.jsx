import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaSearch, FaUser } from "react-icons/fa";
import { Modal, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Sticky from "react-sticky-el";
import Account from "./Pages/Account";
import { FaInstagram, FaPinterestP,  FaXTwitter, FaYoutube } from "react-icons/fa6";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        <Sticky>
          <Navbar expand="lg" className="">
            <div className="left">
              <Navbar.Brand href="#home">
                <div className="img-content">
                  <img src="assets/img/logo.png" alt="" />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown title="Destinations" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/destination">
                      Destinations
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/destinationdetailes">
                      Destinations Details
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Tours" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/tourelist">
                      Tours List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/touredeals">
                      Tours Deals
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/toureguide">
                      Tours Guide
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/touredetails">
                      Tours Details
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/bookingprocess">
                      Booking Process
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                    <NavDropdown.Item href="/faq">Faq's</NavDropdown.Item>
                    <NavDropdown.Item href="/*">404</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Blog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/bloglist">
                      Blog List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/blogdetails">
                      Blog Details
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>

                <div className="contact-info">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>Chicago 12, Melborne City, USA</li>
                    <li>
                      <Link to="tel:+8801682648101">+88 01682648101</Link>
                    </li>
                    <li>
                      <Link to="mailto:info@example.com">info@example.com</Link>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <ul className="clearfix">
                    <li>
                      <Link to="https://x.com/">
                        <span>
                          <FaXTwitter/>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com/">
                        <span>
                          <FaFacebookSquare/>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.pinterest.com/">
                        <span>
                          <FaPinterestP/>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/">
                        <span>
                          <FaInstagram/>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/">
                        <span>
                          <FaYoutube/>
                        </span>
                      </Link>
                    </li>
                  </ul>{" "}
                </div>
              </Navbar.Collapse>
            </div>
            <div className="right">
              <div className="menu-icons">
                <div className="search">
                  <Link>
                    <FaSearch />
                  </Link>
                </div>
                <div className="user">
                  <Link onClick={handleShow}>
                    <FaUser />
                  </Link>

                  <Modal show={show} onHide={handleClose} animation={true}>
                    <Account />
                  </Modal>
                </div>
              </div>
              <button className="button" type="button">
                Book A Tour
              </button>
            </div>
          </Navbar>
        </Sticky>
      </header>
    </>
  );
};
export default Header;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="mt-5">

            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Fitnes Point</h1>

                                <p className="mt-4 ">
                                    <small>
                                        A unique Tech-Education provider where one can get all possible tech education, paving the way to
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <h3>Quick Links</h3>
                                <ul className=" align-single-menue-end justify-content-end">
                                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                                    <Nav.Link as={HashLink} to="/services">Our services</Nav.Link>
                                    <Nav.Link as={HashLink} to="/gallery">Gallery</Nav.Link>
                                    <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
                                    <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h3 className="right-footer-header">Our Location</h3>
                            <div className="right-footer-container">

                                <div className="phone d-flex align-items-center justify-content-center mt-4">

                                    <div>
                                        <h5>+1 8 800 555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">

                                    <div>
                                        <p>
                                            160 Broadway, New York, NY 10038,
                                            <br /> 102 1st Avenue, New York, NY 100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mt-5 text-center">
                        <small>Fitnes Point © . All rights reserved.</small>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Footer;
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Fitness Point</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Our services</Nav.Link>
                        <Nav.Link as={HashLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
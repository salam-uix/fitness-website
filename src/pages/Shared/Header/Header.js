import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar className="bg-transparent-color" bg="bg-transparent-color" variant="bg-transparent-color" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand variant="logo" href="#home">Fitness Point</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services#services">Our services</Nav.Link>
                        <Nav.Link as={HashLink} to="/gallery#gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/about#about">About us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact#contact">Contact us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
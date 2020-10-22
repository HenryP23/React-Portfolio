import React from 'react';
import { Button,NavDropdown, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export default function footer() {
    return (
        <Navbar className="mt-5" fixed ="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>@ 2020 Copyright: Henry Parrish </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link onClick={(e) => { window.location.href = 'https://www.linkedin.com/in/henry-parrish-aa820a197/'; }}>Linkedin</Nav.Link>
                    <Nav.Link onClick={(e) => { window.location.href = 'https://github.com/HenryP23'; }}>GitHub Profile</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

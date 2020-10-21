import React from 'react';
import {NavLink} from 'react-router-dom'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export default function navabar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">portfolio</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}

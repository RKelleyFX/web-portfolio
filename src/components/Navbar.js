// Necessary Imports
import React, { Component } from 'react';

// Routing Imports
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NaviBar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Ryan Kelley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/web-dev">Web Development</Nav.Link>
                            <Nav.Link href="/management">Management</Nav.Link>
                            <Nav.Link href="/volunteer">Volunteer</Nav.Link>
                            <NavDropdown title="Fabrication" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/film-tv">Film and Television</NavDropdown.Item>
                                <NavDropdown.Item href="/fabrication">General</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NaviBar;
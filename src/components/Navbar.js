// Necessary Imports
import React from 'react';

// Routing Imports
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const NaviBar = () => {
   
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Old Forge Maker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/make">Making</Nav.Link>
                            <Nav.Link href="/manage">Doing</Nav.Link>
                            <Nav.Link href="/design">Designing</Nav.Link>
                            <NavDropdown title="Growing" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/steam">The Future - STEAM</NavDropdown.Item>
                                <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    
}

export default NaviBar;
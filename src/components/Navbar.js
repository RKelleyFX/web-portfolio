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
                            <Nav.Link href="/code">Coding</Nav.Link>
                            <Nav.Link href="/make">Making</Nav.Link>
                            <Nav.Link href="/manage">Managing</Nav.Link>
                            <Nav.Link href="/learn">Learning</Nav.Link>
                            <Nav.Link href="/about">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    
}

export default NaviBar;
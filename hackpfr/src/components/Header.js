import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavElement(props) {
    if (window.location.pathname === props.path)
        return <Nav.Link href={props.path} className="active">{props.children}</Nav.Link>
    else
        return <Nav.Link href={props.path}>{props.children}</Nav.Link>
}

function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/" style={{ color: "white" }}>
                (LOGO tutaj)
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavElement path="/throw">Oddaj</NavElement>
                    <NavElement path="/reportCollection">Zgłoś zbiórkę</NavElement>
                    <NavElement path="/stats">Statystyki</NavElement>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;

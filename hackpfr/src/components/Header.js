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
                (nazwa robocza)
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavElement path="/">Strona główna</NavElement>
                    <NavElement path="/bins">Ekran 2</NavElement>
                    <NavElement path="/cases">Ekran 3</NavElement>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;

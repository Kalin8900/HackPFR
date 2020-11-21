import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../assets/graphics/logo.png'
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme

function NavElement(props) {
    if (window.location.pathname === props.path)
        return <Nav.Link style={{background: mt.colors.accent}} href={props.path} className="active navItem">{props.children}</Nav.Link>
    else
        return <Nav.Link className='navItem  navigation' href={props.path}>{props.children}</Nav.Link>
}

function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" sticky="top" className='navigation'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">
                <Image src={logo} fluid className='logo'/>
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

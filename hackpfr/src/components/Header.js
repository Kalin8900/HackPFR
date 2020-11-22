import React from 'react';
import { Navbar, Nav, Image, Form } from 'react-bootstrap';
import logo from '../assets/graphics/logo.png'
import mainTheme from "../assets/graphics/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const mt = mainTheme

function NavElement(props) {
    if (window.location.pathname === props.path)
        return <Nav.Link style={{ background: mt.colors.accent }} href={props.path} className="active navItem" {...props}>{props.children}</Nav.Link>
    else
        return <Nav.Link className='navItem  navigation' href={props.path} {...props}>{props.children}</Nav.Link>
}

function Header(props) {
    const user = props.user;
    const cookie = document.cookie.split(' ');
    console.log(window.location.pathname)

    if (window.location.pathname === '/log')
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" sticky="top" className='navigation'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">
                    <Image src={logo} fluid className='logo' />
                </Navbar.Brand>
            </Navbar>
        );
    else if (user && (window.location.pathname === '/cityPanel' || window.location.pathname === '/covid' || window.location.pathname === '/covidUpload' || window.location.pathname === '/declarations'))
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" sticky="top" className='navigation'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">
                    <Image src={logo} fluid className='logo' />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            user.displayName === 'urząd' ?
                                <NavElement path="/declarations">Mapa deklaracji</NavElement>
                                :
                                <NavElement path="/declarations" disabled>Mapa deklaracji</NavElement>
                        }
                        <NavElement path="/covid">Mapa COVID</NavElement>
                    </Nav>
                    <Form inline>
                        <NavElement path="/logout"><FontAwesomeIcon style={{margin: 5}} icon={faSignOutAlt} />Wyloguj</NavElement>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    else
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" sticky="top" className='navigation'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">
                    <Image src={logo} fluid className='logo' />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavElement path="/throw">Oddaj</NavElement>
                        <NavElement path="/reportCollection">Zgłoś zbiórkę</NavElement>
                        <NavElement path="/stats">Statystyki</NavElement>
                    </Nav>
                    <Form inline>
                        <NavElement path="/log"><FontAwesomeIcon style={{margin: 5}} icon={faSignInAlt} /> Zaloguj</NavElement>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
}


export default Header;

import React, {useState, useRef, useContext, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button, Alert, Form} from 'react-bootstrap';
import {Redirect, useRouteMatch} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

const NotFound = props => {

    return(
        <Container className='page' style={{backgroundColor: mt.colors.pageBackground, justifyContent: 'center', display: 'flex', flexFlow: 'column'}} >
            <h1>Error 404</h1>
            <h2>We couldn't found what you were looking for :(</h2>
        </Container>
    )
}

export default NotFound;
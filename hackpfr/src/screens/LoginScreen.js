import React, {useState, useRef, useContext, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button, Alert, Form} from 'react-bootstrap';
import {Redirect, useRouteMatch} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

const LoginForm = props => {
    const [logged, setLogged] = useState(false);
    const loginInput = useRef(null);
    const passInput = useRef(null);
    const {path, url} = useRouteMatch();


    //MAKIETA
    const click = () => {
        if(loginInput.current.value === 'urzad' && passInput.current.value === 'urzad123')
        {
            setLogged(true);
            document.cookie = '';
            document.cookie = 'user=urząd cnt=1 ';
        }
        else if(loginInput.current.value === 'san' && passInput.current.value === 'san123')
        {
            setLogged(true);
            document.cookie = 'user=sanepid cnt=1 ';
        }
        else
            toast.error('Nie udało się zalogować na podany login i hasło');

        console.log(document.cookie)
    }

    return (
        <Col xs={3} style={props.style}>
            <h1>
                Zaloguj się
            </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control ref={loginInput} type="login" placeholder="Login"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control ref={passInput} type="password" placeholder="Hasło"/>
                </Form.Group>
                {logged ? <Redirect to={'/cityPanel'} /> :
                <Button variant="primary" onClick={click} size='lg'>
                    Zaloguj
                </Button>}
            </Form>
        </Col>
    )
}

const LoginScreen = props => {

    return (
        <Container className='page' style={{background: mt.colors.pageBackground, justifyContent: 'center'}}>
            <ToastContainer />
            <LoginForm  style={{marginBottom: '15vh'}}/>

        </Container>
)
}

export default LoginScreen;
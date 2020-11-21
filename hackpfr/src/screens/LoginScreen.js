import React, {useState, useRef, useContext, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button, Alert, Form} from 'react-bootstrap';
import {Redirect, useRouteMatch} from 'react-router-dom'

const LoginForm = props => {
    const [logged, setLogged] = useState(false);
    const loginInput = useRef(null);
    const passInput = useRef(null);
    const {path, url} = useRouteMatch();

    const click = () => {
        if(loginInput.current.value === 'admin' && passInput.current.value === 'admin123')
            setLogged(true);
    }

    return (
        <Col block>
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
        <Container>
            <LoginForm  />

        </Container>
)
}

export default LoginScreen;
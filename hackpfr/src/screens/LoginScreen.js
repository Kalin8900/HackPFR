import React, {useState, useRef, useContext, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button, Alert, Form} from 'react-bootstrap';
import {Redirect, useRouteMatch} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import mainTheme from "../assets/graphics/theme";
import {auth} from "../firebase";

const mt = mainTheme;

const LoginForm = props => {
    const [user, setUser] = useState(false);
    const loginInput = useRef(null);
    const passInput = useRef(null);


    //MAKIETA
    const click = () => {
        const email = loginInput.current.value;
        const pass = passInput.current.value;

        auth.signInWithEmailAndPassword(email, pass)
            .then((e) => {
                setUser(e.user);
            })
            .catch((err) => {
                toast.error('Nie udało się zalogować na podany login i hasło');
            })
    }

    return (
        <Col xs={3} style={props.style}>
            <h1>
                Zaloguj się
            </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={loginInput} type="email" placeholder="Login"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control ref={passInput} type="password" placeholder="Hasło"/>
                </Form.Group>
                {auth.currentUser ? <Redirect to={'/cityPanel'} /> :
                <Button variant="primary" onClick={click} size='lg'>
                    Zaloguj
                </Button>}
            </Form>
        </Col>
    )
}

const LoginScreen = props => {

    return (
        <Container className='page' style={{background: mt.colors.pageBackground, justifyContent: 'center', height: '91vh'}}>
            <ToastContainer />
            <LoginForm style={{marginBottom: '15vh'}}/>

        </Container>
)
}

export default LoginScreen;
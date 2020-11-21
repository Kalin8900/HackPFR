import React, {useState, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button} from 'react-bootstrap';
import BigButton from "../components/BigButton";


const CityScreen = props => {

    return (
        <Container>
            <Row>
                <Col>
                    <BigButton path='/declarations'>
                        Mapa deklaracji
                    </BigButton>
                </Col>
                <Col>
                    <BigButton path='/covid'>
                        Mapa COVID
                    </BigButton>
                </Col>
            </Row>
        </Container>
    )
}

export default CityScreen;
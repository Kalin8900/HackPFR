import React, {useState, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button} from 'react-bootstrap';
import BigButton from "../components/BigButton";

function HomeScreen() {
    return (
        <Container>
            <Row>
                <Col>
                    <BigButton className="homeBtn" path='/throw'>Oddaj śmieci</BigButton>
                </Col>
                <Col>
                    <BigButton className='smallHomeBtn' path='/reportCollection'>Zgłoś zbiórkę</BigButton>
                    <BigButton className='smallHomeBtn' path='/update'>Aktualizuj zbiórkę</BigButton>
                </Col>
                <Col>
                    <BigButton className='homeBtn' path='/reportIsolation'>Zgłoś izolację</BigButton>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeScreen;
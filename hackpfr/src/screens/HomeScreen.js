import React, {useState, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button} from 'react-bootstrap';
import BigButton from "../components/BigButton";
import mainTheme from "../assets/graphics/theme";
import {btnStyle, coloredBtnStyle} from "../assets/graphics/styles";

const mt = mainTheme;

const upperBtn = {
    ...btnStyle,
    marginBottom: '1vw'
}

function HomeScreen() {


    return (
        <Container className='page' style={{background: mt.colors.pageBackground}}>
            <Container>
                <Row>
                    <Col>
                        <BigButton className="homeBtn" style={btnStyle} path='/throw'>Aktualne zbiórki</BigButton>
                    </Col>
                    <Col>
                        <BigButton className='smallHomeBtn' style={upperBtn} path='/reportCollection'>Zgłoś zbiórkę</BigButton>
                        <BigButton className='smallHomeBtn' style={btnStyle} path='/update'>Zaktualizuj zbiórkę</BigButton>
                    </Col>
                    <Col>
                        <BigButton className='homeBtn' style={btnStyle} path='/reportIsolation'>Zgłoś izolację</BigButton>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HomeScreen;
import React, {useState, Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button} from 'react-bootstrap';
import BigButton from "../components/BigButton";
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

const btnStyle = {
    background: mt.colors.white,
    borderRadius: '2%',
    border: 0,
    color: mt.colors.black,
    fontWeight: 600,
    fontSize: mt.font.size.buttonSize,
    boxShadow: '10px 10px ' + mt.colors.buttonShadow
}

const coloredBtnStyle = {
    ...btnStyle,
    marginBottom: '1vw'
};
coloredBtnStyle.background = mt.colors.accent;
coloredBtnStyle.color = mt.colors.white;

function HomeScreen() {
    return (
        <Container className='page' style={{background: mt.colors.pageBackground}}>
            <Container>
                <Row>
                    <Col>
                        <BigButton className="homeBtn" style={btnStyle} path='/throw'>Akutalne zbiórki</BigButton>
                    </Col>
                    <Col>
                        <BigButton className='smallHomeBtn' style={coloredBtnStyle} path='/reportCollection'>Zgłoś zbiórkę</BigButton>
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
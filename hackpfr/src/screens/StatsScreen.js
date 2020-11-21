import React, {useState, Component, useEffect} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import mainTheme from "../assets/graphics/theme";
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);
const mt = mainTheme;

const StatsScreen = props => {


    return (
        <Container className='page' style={{backgroundColor: mt.colors.pageBackground, justifyContent: 'center', flexFlow: 'column'}}>
            <Row style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '50vw',gap: 0}}>
                <Col>
                    <h3>szkoła 1.</h3>
                    <div style={{background: 'red', height:175}}></div>
                </Col>
                <Col>
                    <h3>szkoła 2.</h3>
                    <div style={{background: 'red', height:250}}></div>
                </Col>
                <Col>
                    <h3> szkoła 3.</h3>
                    <div style={{background: 'red', height:100}}></div>
                </Col>
            </Row>
        </Container>
    )
}

export default StatsScreen;
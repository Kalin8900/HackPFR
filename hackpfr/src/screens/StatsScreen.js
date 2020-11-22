import React, {useState, Component, useEffect} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import mainTheme from "../assets/graphics/theme";
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);
const mt = mainTheme;

const RowStyle = {display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '50vw',gap: 0}
const StatsScreen = props => {

    const traces = {
        trace1: {
            x: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip'],
            y: [50, 55, 65, 54, 78, 87, 64],
            name: 'Butelki PET',
            mode: 'lines',
            line: {
                color: 'rgb(235,252,3)',
                width: 2
            }
        },
        trace2: {
            x: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip'],
            y: [43, 32, 24, 49, 61, 52, 33],
            name: 'Metal',
            mode: 'lines',
            line: {
                color: 'rgb(53,55,56)',
                width: 2
            }
        },
        trace3: {
            x: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip'],
            y: [89, 54, 84, 90, 56, 54, 76],
            name: 'Makulatura',
            mode: 'lines',
            line: {
                color: 'rgb(3, 186, 252)',
                width: 2
            }
        },
    }

    return (
        <Container className='page' style={{backgroundColor: mt.colors.pageBackground, justifyContent: 'center', flexFlow: 'column'}}>
            <Row style={{...RowStyle, marginTop: '4vh'}}><h2>Najlepsi w tym miesiącu</h2></Row>
            <Row style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '50vw',gap: 0}}>
                <Col>
                    <h3>Szkoła Podstawowa Nr 2</h3>
                    <div style={{background: 'red', height:175}}></div>
                </Col>
                <Col>
                    <h3>II Liceum Ogólnokształcące</h3>
                    <div style={{background: 'red', height:250}}></div>
                </Col>
                <Col>
                    <h3>Zespół Szkół Budowlanych i Geodezyjnych</h3>
                    <div style={{background: 'red', height:100}}></div>
                </Col>
            </Row>
            <Row style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '50vw',gap: 0, marginTop: '6vh'}}>
            <Plot data={[traces.trace1, traces.trace2, traces.trace3]} layout={{title: 'Ilość zebranych surowców'}} />
            </Row>
        
        </Container>
    )
}

export default StatsScreen;
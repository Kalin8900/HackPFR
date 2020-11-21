import React, {useState, Component, useEffect} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import BigButton from "../components/BigButton";
import {toast, ToastContainer} from "react-toastify";
import {coloredBtnStyle} from "../assets/graphics/styles";
import mainTheme from "../assets/graphics/theme";
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
const mt = mainTheme;

const StatsScreen = props => {


    return (
        <Container className='page' style={{backgroundColor: mt.colors.pageBackground}}>
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        />
        </Container>
    )
}

export default StatsScreen;
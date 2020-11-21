import React, { useState, useEffect, useComponent } from "react";
import { Navbar, Nav, NavDropdown, ListGroup } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

const RankingItem = props => {
    console.log(props.index)

    if(props.index % 2 !== 0)
        return (<ListGroup.Item style={{display: 'flex', justifyContent: 'space-around'}}>
            <span>{props.children}</span><span>{props.value + ' kg'} </span>
        </ListGroup.Item>)
    else
        return (<ListGroup.Item variant='secondary' style={{display: 'flex', justifyContent: 'space-around'}}>
            <span>{props.children}</span><span>{props.value + ' kg'}</span>
        </ListGroup.Item>)
}

const CollectionSummary = () => {

        
    return (
        <div id="collectionSummary" style={collectionSummaryStyle}>
            <h5 style={{margin: '2vh'}}>RANKING ZBIÓREK</h5>
            <h6>Zebrano 5432kg</h6>
            <ListGroup>
                <RankingItem index={1} value={154}>Szkoła 1</RankingItem>
                <RankingItem index={2} value={120}>Szkoła 2</RankingItem>
                <RankingItem index={3} value={98}>Szkoła 3</RankingItem>
            </ListGroup>
        </div>
    );
}

export default CollectionSummary; 

const collectionSummaryStyle = {
    'height': "50vh",
    'width': '17vw',
    'borderRadius': "10px",
    'position': "absolute",
    'right': 0,
    'marginTop': "15vh",
    'background': "rgba(191, 222, 222, 1)",
    'filter': "drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.161))",
    'zIndex': 1000
}
  
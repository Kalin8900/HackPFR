import React, { useState, useEffect, useComponent } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import collections from "../assets/geodata/collections.json"

const CollectionSummary = () => {
        
    return (
        <div id="collectionSummary" style={collectionSummaryStyle}>
            RANKING ZBIÓREK
        </div>
    );
}

export default CollectionSummary; 

const collectionSummaryStyle = {
    'height': "80vh",
    'width': 200,
    'borderRadius': "10px",
    'position': "absolute",
    'right': 20,
    'marginTop': "5vh",
    'background': "rgba(255,255,255,1)",
    'filter': "drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.161))",
    'zIndex': 1000
}
  
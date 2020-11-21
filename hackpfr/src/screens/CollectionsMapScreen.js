import React, { useState, useEffect, useComponent } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import L from "leaflet";


const CollectionsMapScreen = () => {

    useEffect(() => {
        //map init
        let mymap = L.map('map').setView([57.947609, 19.157056], 6, {zoomControl: true });
        //maps max&min zoom levels
        mymap.options.minZoom = 5;
        mymap.options.maxZoom = 10;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

    }, []);

    return (
        <div id="map"/>
    );
}



export default CollectionsMapScreen;
import React, { useState, useEffect, useComponent } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import L from "leaflet";
import collections from "../assets/geodata/collections.json"
import markerIcon from "../assets/graphics/marker.png"
import CollectionSummary from "../components/CollectionSummary"

const CollectionsMapScreen = () => {

    useEffect(() => {
        //map init
        let mymap = L.map('mapid').setView([51.132541, 23.479241], 14, {zoomControl: true });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap)

        let markerImage = L.icon({
            iconUrl: markerIcon,
            iconSize:     [25, 25],
            iconAnchor:   [20, 20],
            popupAnchor:  [-30, -76]
        });

        let overlays = {
            "Zbiórki": L.geoJSON(collections, {pointToLayer: function PToL(feature, latlng) {return L.marker(latlng, {icon: markerImage})}})
        }

        let layerControl = L.control.layers(overlays, null, {collapsed: false, position: 'bottomleft'}).addTo(mymap)

    }, []);

    return (
        <div id="mapid">
            {/*<LayersControler/> #tutaj fajnie jakby był ten layer control z Open Beer Maps# */}
            <CollectionSummary/>
        </div>
    );
}

export default CollectionsMapScreen;
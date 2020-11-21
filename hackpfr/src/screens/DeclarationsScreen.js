import React, { useState, useEffect } from "react";
import declarations from '../assets/geodata/declarations_done.json';
import markerIcon from "../assets/graphics/marker.png"
import L from "leaflet";

let mymap;

const CollectionsMapScreen = () => {
    useEffect(() => {
        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap)

        let markerImage = L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });

        for (let i = 0; i < declarations.features.length; i++) {
            ;
        }

        //mymap.addLayer(markers);
    }, []);

    return (
        <div id="mapid"></div>
    );
}

export default CollectionsMapScreen;
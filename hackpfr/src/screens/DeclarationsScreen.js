import React, { useState, useEffect } from "react";
import declarations from '../assets/geodata/declarations_done.json';
import markerIconGreen from "../assets/graphics/pin-doc-zielony.svg";
import markerIconBlue from "../assets/graphics/pin-doc-niebieski.svg";
import markerIconBlack from "../assets/graphics/pin-doc-czarny.svg";
//import { MarkerCluster } from '../components/clusters/src/MarkerCluster.js';
//import { MarkerClusterGroup } from '../components/clusters/src/MarkerClusterGroup.js';
import * as clusters from '../components/cluster/leaflet.markercluster/dist/leaflet.markercluster.js';
import '../components/cluster/leaflet.markercluster/dist/MarkerCluster.css';
import '../components/cluster/leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from "leaflet";
import PermissionDenied from "../components/PermissionDenied";

let mymap;

const CollectionsMapScreen = (props) => {
    const user = props.user;

    useEffect(() => {
        if (user.displayName !== 'urząd')
            return;
        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap)

        let markerGreen = L.icon({
            iconUrl: markerIconGreen,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });

        let markerBlue = L.icon({
            iconUrl: markerIconBlue,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });

        let markerBlack = L.icon({
            iconUrl: markerIconBlack,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });

        let markers = L.markerClusterGroup({maxClusterRadius: 40});

        for (let i = 0; i < declarations.features.length; i++) {
            let a = declarations.features[i].geometry.coordinates;
            let type = declarations.features[i].properties.type;
            let marker = L.marker(new L.LatLng(a[1], a[0]), { title: "title", icon: (type === 'Mieszkalna' ? markerGreen : (type === 'Niemieszkalna' ? markerBlue : markerBlack)) });
            marker.bindPopup("<b>" + declarations.features[i].properties.ULica_nr + "</b>");
            markers.addLayer(marker);
        }
        
        mymap.addLayer(markers);

    }, []);

    if (user.displayName !== 'urząd')
        return <PermissionDenied />

    return (
        <div id="mapid"></div>
    );
}

export default CollectionsMapScreen;
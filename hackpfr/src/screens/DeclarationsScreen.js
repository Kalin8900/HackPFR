import React, { useState, useEffect } from "react";
import declarations from '../assets/geodata/declarations_done.json';
import markerIcon from "../assets/graphics/marker.png"
//import { MarkerCluster } from '../components/clusters/src/MarkerCluster.js';
//import { MarkerClusterGroup } from '../components/clusters/src/MarkerClusterGroup.js';
import L from "leaflet";
import PermissionDenied from "../components/PermissionDenied";

let mymap;

const CollectionsMapScreen = (props) => {
    const user = props.user;

    useEffect(() => {
        if(user.displayName !== 'urząd')
            return;
        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap)

        let markerGreen = L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });

        let markerBlue = L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });

        let markerBlack = L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });
/*
		let markers = L.markerClusterGroup();

        for (let i = 0; i < declarations.features.length; i++) {
            let a = declarations.features[i].geometry.coordinates;
            let type = eclarations.features[i].properties.type;
			let marker = L.marker(new L.LatLng(a[0], a[1]), { title: "title", icon: (type === 'Mieszkalna' ? markerGreen : (type === 'Niemieszkalna' ? markerBlue : markerBlack)) });
			marker.bindPopup("title");
			markers.addLayer(marker);
		}
		mymap.addLayer(markers);
*/
    }, []);

    if(user.displayName !== 'urząd')
        return <PermissionDenied />

    return (
        <div id="mapid"></div>
    );
}

export default CollectionsMapScreen;
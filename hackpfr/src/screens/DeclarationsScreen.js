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

        L.tileLayer('https://api.mapbox.com/styles/v1/bwiktorz/ckhsxkw1v1sbg1amkta7gi207/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYndpa3RvcnoiLCJhIjoiY2p0OGh6OWtuMDhmNDN5cXk4ZTEzMDltYiJ9.UVVfRCnZuTePUEoenfBOKA',{}).addTo(mymap)

        let markerImage = L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 25],
            iconAnchor: [20, 20],
            popupAnchor: [-30, -76]
        });
/*
		let markers = L.markerClusterGroup();

        for (let i = 0; i < declarations.features.length; i++) {
			let a = declarations.features[i].geometry.coordinates;
			let marker = L.marker(new L.LatLng(a[0], a[1]), { title: "title" });
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
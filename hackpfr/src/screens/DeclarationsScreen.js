import React, { useState, useEffect } from "react";
import L from "leaflet";

let mymap;

const CollectionsMapScreen = () => {
    useEffect(() => {
        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap)
    }, []);

    return (
        <div id="mapid"></div>
    );
}

export default CollectionsMapScreen;
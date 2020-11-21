import React, { useState, useEffect } from "react";
import L from "leaflet";
import collections from "../assets/geodata/collections.json"
import markerIcon from "../assets/graphics/marker.png"
import MapFiltering from "../components/MapFiltering"

function generateLayer(type) {
    return L.geoJson(collections, {
        filter: function (feature, layer) {
            return feature.properties.type === type;
        },
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: markerImage
            }).on('mouseover', function () {
                this.bindPopup(feature.properties.name).openPopup();
            });
        }
    });
}

let markerImage = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 25],
    iconAnchor: [20, 20],
    popupAnchor: [-30, -76]
});

let mymap;
let domowe = generateLayer("Izolatoria domowe");
let stacjonarne = generateLayer("Izolatoria stacjonarne");
let szpitale = generateLayer("Szpitale");

const CollectionsMapScreen = () => {
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap)
    }, []);

    useEffect(() => {
        if (Array.isArray(filter) && filter.length) {
            if (filter.includes('Izolatoria domowe'))
                domowe.addTo(mymap);
            else
                mymap.removeLayer(domowe);

            if (filter.includes('Izolatoria stacjonarne'))
                stacjonarne.addTo(mymap);
            else
                mymap.removeLayer(stacjonarne);

            if (filter.includes('Szpitale'))
                szpitale.addTo(mymap);
            else
                mymap.removeLayer(szpitale);
        } else {
            domowe.addTo(mymap);
            stacjonarne.addTo(mymap);
            szpitale.addTo(mymap);
        }
    }, [filter]);

    return (
        <div id="mapid">
            <MapFiltering filter={filter} setFilter={setFilter} screen="CovidScreen" />
        </div>
    );
}

export default CollectionsMapScreen;
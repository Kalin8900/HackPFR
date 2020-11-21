import React, { useState, useEffect } from "react";
import L from "leaflet";
import collections from "../assets/geodata/collections.json"
import markerIcon from "../assets/graphics/marker.png"
import CollectionSummary from "../components/CollectionSummary"
import MapFiltering from "../components/MapFiltering"

function generateLayer(fraction) {
    return L.geoJson(collections, {
        filter: function (feature, layer) {
            return feature.properties.fraction === fraction;
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
let makulatura = generateLayer("Makulatura");
let baterie = generateLayer("Baterie");
let metal = generateLayer("Metal");
let elektronika = generateLayer("Elektronika");
let leki = generateLayer("Leki");
let nakretki = generateLayer("Nakrętki");
let butelki = generateLayer("Butelki");
let pszok = generateLayer("PSZOK");
let mgo = generateLayer("MGO");

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
            if (filter.includes('Makulatura'))
                makulatura.addTo(mymap);
            else
                mymap.removeLayer(makulatura);

            if (filter.includes('Baterie'))
                baterie.addTo(mymap);
            else
                mymap.removeLayer(baterie);

            if (filter.includes('Metal'))
                metal.addTo(mymap);
            else
                mymap.removeLayer(metal);

            if (filter.includes('Elektronika'))
                elektronika.addTo(mymap);
            else
                mymap.removeLayer(elektronika);

            if (filter.includes('Leki'))
                leki.addTo(mymap);
            else
                mymap.removeLayer(leki);

            if (filter.includes('Nakrętki'))
                nakretki.addTo(mymap);
            else
                mymap.removeLayer(nakretki);

            if (filter.includes('Butelki'))
                butelki.addTo(mymap);
            else
                mymap.removeLayer(butelki);

            if (filter.includes('PSZOK'))
                pszok.addTo(mymap);
            else
                mymap.removeLayer(pszok);

            if (filter.includes('MGO'))
                mgo.addTo(mymap);
            else
                mymap.removeLayer(mgo);
        } else {
            makulatura.addTo(mymap);
            baterie.addTo(mymap);
            metal.addTo(mymap);
            elektronika.addTo(mymap);
            leki.addTo(mymap);
            nakretki.addTo(mymap);
            butelki.addTo(mymap);
            pszok.addTo(mymap);
            mgo.addTo(mymap);
        }
    }, [filter]);

    return (
        <div id="mapid">
            <CollectionSummary />
            <MapFiltering filter={filter} setFilter={setFilter} />
        </div>
    );
}

export default CollectionsMapScreen;
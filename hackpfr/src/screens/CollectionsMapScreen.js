import React, { useState, useEffect } from "react";
import L from "leaflet";
import collections from "../assets/geodata/collections_done.json";
import drugs from "../assets/geodata/drugsNbatteries_done.json";
import bulky from "../assets/geodata/bulky_waste.json";
import pszoks from "../assets/geodata/pszok_data.json";
import mgos from "../assets/geodata/mgo_data.json";
import CollectionSummary from "../components/CollectionSummary";
import MapFiltering from "../components/MapFiltering";
import pinBaterie from "../assets/graphics/pin-baterie.svg";
import pinElektronika from "../assets/graphics/pin-elektronika.svg";
import pinLeki from "../assets/graphics/pin-leki.svg";
import pinMakulatura from "../assets/graphics/pin-makulatura.svg";
import pinNakretki from "../assets/graphics/pin-nakretki.svg";
import pinPlastik from "../assets/graphics/pin-plastik.svg";
import pinMetale from "../assets/graphics/pin-metale.svg";
import pinGabaryty from "../assets/graphics/pin-gabaryty.svg";
import pinPszok from "../assets/graphics/pin-pszok.svg";
import pinMgo from "../assets/graphics/pin-mgo.svg";

function generateLayer(fraction, icon) {
    let markerImage = L.icon({
        iconUrl: icon,
        iconSize: [35, 35],
        iconAnchor: [20, 20],
        popupAnchor: [-3, -17]
    });

    if (fraction === 'Leki' || fraction === 'Baterie')
        return L.geoJson(drugs, {
            filter: function (feature, layer) {
                return feature.properties.type === fraction;
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>" + feature.properties.name + "</b><br/>" + feature.properties.old_address).openPopup();
                });
            }
        });
    else if (fraction === 'Gabaryty')
        return L.geoJson(bulky, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>" + feature.properties.place + "</b><br/>Daty przyjmowania: " + feature.properties.data.replaceAll(';', ', ')).openPopup();
                });
            }
        });
    else if (fraction === 'PSZOK')
        return L.geoJson(pszoks, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>PSZOK</b><br/>" + feature.properties.Adres1).openPopup();
                });
            }
        });
    else if (fraction === 'MGO')
        return L.geoJson(mgos, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>MGO (" + feature.properties.owner + ")</b><br/>" + feature.properties.adres).openPopup();
                });
            }
        });
    else
        return L.geoJson(collections, {
            filter: function (feature, layer) {
                switch (fraction) {
                    case 'Makulatura':
                        return feature.properties.paper > 0;
                    case 'Metal':
                        return feature.properties.metal > 0;
                    case 'Elektronika':
                        return feature.properties.chargers > 0;
                    case 'Butelki':
                        return feature.properties.plastic > 0;
                    case 'Nakrętki':
                        return feature.properties.cups > 0;
                    default:
                        return false;
                }
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>" + feature.properties.name + "</b><br/>" + feature.properties.old_address).openPopup();
                });
            }
        });
}

let mymap;
let makulatura = generateLayer("Makulatura", pinMakulatura);
let baterie = generateLayer("Baterie", pinBaterie);
let metal = generateLayer("Metal", pinMetale);
let elektronika = generateLayer("Elektronika", pinElektronika);
let leki = generateLayer("Leki", pinLeki);
let nakretki = generateLayer("Nakrętki", pinNakretki);
let butelki = generateLayer("Butelki", pinPlastik);
let gabaryty = generateLayer("Gabaryty", pinGabaryty);
let pszok = generateLayer("PSZOK", pinPszok);
let mgo = generateLayer("MGO", pinMgo);

const CollectionsMapScreen = () => {
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });
        L.tileLayer('https://api.mapbox.com/styles/v1/bwiktorz/ckhsxkw1v1sbg1amkta7gi207/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYndpa3RvcnoiLCJhIjoiY2p0OGh6OWtuMDhmNDN5cXk4ZTEzMDltYiJ9.UVVfRCnZuTePUEoenfBOKA',{}).addTo(mymap)
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

            if (filter.includes('Gabaryty'))
                gabaryty.addTo(mymap);
            else
                mymap.removeLayer(gabaryty);

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
            gabaryty.addTo(mymap);
            pszok.addTo(mymap);
            mgo.addTo(mymap);
        }
    }, [filter]);

    return (
        <div id="mapid" style={{ height: '88vh' }}>
            <CollectionSummary />
            <MapFiltering filter={filter} setFilter={setFilter} screen="CollectionsMapScreen" />
        </div>
    );
}

export default CollectionsMapScreen;
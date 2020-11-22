import React, { useState, useEffect } from "react";
import L from "leaflet";
import { Button } from 'react-bootstrap';
import MapFiltering from "../components/MapFiltering";
import hospitals from "../assets/geodata/medicalBuildings_done.json"
import isolation from "../assets/geodata/isolation.json"
import pinDomowe from "../assets/graphics/pin-dom.svg";
import pinStacjonarne from "../assets/graphics/pin-publiczne.svg";
import pinKwarantanna from "../assets/graphics/pin-virus.svg";
import pinSzpital from "../assets/graphics/pin-szpital.svg";
import { Link } from 'react-router-dom';

function generateLayer(type, icon) {
    let markerImage = L.icon({
        iconUrl: icon,
        iconSize: [35, 35],
        iconAnchor: [20, 20],
        popupAnchor: [-3, -17]
    });

    if (type === 'Szpitale')
        return L.geoJson(hospitals, {
            filter: function (feature, layer) {
                return feature.properties.x_skrKarto === "szpit.";
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>" + feature.properties.x_informDo + "</b>").openPopup();
                });
            }
        });
    else
        return L.geoJson(isolation, {
            filter: function (feature, layer) {
                switch (type) {
                    case 'Izolatoria domowe':
                        return feature.properties.type === 'isolation';
                    case 'Izolatoria stacjonarne':
                        return feature.properties.type === 'public';
                    case 'Kwarantanna':
                        return feature.properties.type === 'quarantine';
                    default:
                        return false;
                }
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: markerImage
                }).on('mouseover', function () {
                    this.bindPopup("<b>" + feature.properties.prg_addres + "</b><br/>Liczba osób: " + feature.properties.people).openPopup();
                });
            }
        });
}

let mymap;
let domowe = generateLayer("Izolatoria domowe", pinDomowe);
let stacjonarne = generateLayer("Izolatoria stacjonarne", pinStacjonarne);
let kwarantanna = generateLayer("Kwarantanna", pinKwarantanna);
let szpitale = generateLayer("Szpitale", pinSzpital);

const CollectionsMapScreen = (props) => {
    const [filter, setFilter] = useState([]);

    useEffect(() => {

        //map init
        mymap = L.map('mapid').setView([51.132541, 23.479241], 14, { zoomControl: true });

        L.tileLayer('https://api.mapbox.com/styles/v1/bwiktorz/ckhsxkw1v1sbg1amkta7gi207/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYndpa3RvcnoiLCJhIjoiY2p0OGh6OWtuMDhmNDN5cXk4ZTEzMDltYiJ9.UVVfRCnZuTePUEoenfBOKA',{}).addTo(mymap)
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

            if (filter.includes('Kwarantanna'))
                kwarantanna.addTo(mymap);
            else
                mymap.removeLayer(kwarantanna);

            if (filter.includes('Szpitale'))
                szpitale.addTo(mymap);
            else
                mymap.removeLayer(szpitale);
        } else {
            domowe.addTo(mymap);
            stacjonarne.addTo(mymap);
            kwarantanna.addTo(mymap);
            szpitale.addTo(mymap);
        }
    }, [filter]);

    return (
        <div id="mapid">
            <MapFiltering filter={filter} setFilter={setFilter} screen="CovidScreen" />
            <div id="csvUpload" style={csvUploadStyle}>
                <Link to="/covidUpload"><Button>Importuj zakażonych z CSV</Button></Link>
            </div>
        </div>
    );
}

const csvUploadStyle = {
    'width': 200,
    'borderRadius': "10px",
    'position': "absolute",
    'right': 20,
    'marginTop': "5vh",
    'background': "rgba(255,255,255,1)",
    'filter': "drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.161))",
    'zIndex': 1000,
    'padding': 10
}

export default CollectionsMapScreen;
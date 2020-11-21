import React from "react";
import { ListGroup } from 'react-bootstrap';
import filtrBaterie from '../assets/graphics/filtr_baterie.svg';
import filtrElektronika from '../assets/graphics/filtr_elektronika.svg';
import filtrLeki from '../assets/graphics/filtr_leki.svg';
import filtrMakulatura from '../assets/graphics/filtr_makulatura.svg';
import filtrMetale from '../assets/graphics/filtr_metale.svg';
import filtrNakretki from '../assets/graphics/filtr_nakretki.svg';
import filtrMgo from '../assets/graphics/filtr_mgo.svg';
import filtrPszok from '../assets/graphics/filtr_pszok.svg';

function removeElement(array, element) {
    let result = [];
    for (let i in array) {
        if (array[i] !== element)
            result.push(array[i]);
    }
    return result;
}

const FilteredElement = (props) => {
    if (props.filter.includes(props.name))
        return (<ListGroup.Item className="active" action variant="light" onClick={() => props.setFilter(removeElement(props.filter, props.name))}><img src={props.icon} style={{width: '1vw'}} /> {props.name}</ListGroup.Item>);
    else
        return (<ListGroup.Item action variant="light" onClick={() => props.setFilter([...props.filter, props.name])}><img src={props.icon} style={{width: '1vw'}} /> {props.name}</ListGroup.Item>);
}

const MapFiltering = (props) => {
    if (props.screen === 'CollectionsMapScreen')
        return (
            <div style={mapFilteringStyle}>
                <h6 style={{ margin: '2vh' }}>FILTROWANIE</h6>
                <ListGroup>
                    <FilteredElement name="Leki" icon={filtrLeki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Baterie" icon={filtrBaterie} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Makulatura" icon={filtrMakulatura} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Metal" icon={filtrMetale} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Elektronika" icon={filtrElektronika} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Butelki" icon={filtrNakretki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Nakrętki" icon={filtrNakretki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="PSZOK" icon={filtrPszok} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="MGO" icon={filtrMgo} filter={props.filter} setFilter={props.setFilter} />
                </ListGroup>
            </div>
        );
    else if (props.screen === 'CovidScreen')
        return (
            <div style={mapFilteringStyle}>
                <h6 style={{ margin: '2vh' }}>FILTROWANIE</h6>
                <ListGroup>
                    <FilteredElement name="Izolatoria domowe" icon={filtrNakretki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Ilozatioria stacjonarne" icon={filtrNakretki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Szpitale" icon={filtrNakretki} filter={props.filter} setFilter={props.setFilter} />
                </ListGroup>
            </div>
        );
}

export default MapFiltering;

const mapFilteringStyle = {
    'width': 200,
    'borderRadius': "10px",
    'position': "absolute",
    'left': 20,
    'marginTop': "5vh",
    'background': "rgba(255,255,255,1)",
    'filter': "drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.161))",
    'zIndex': 1000
}

import React from "react";
import { ListGroup } from 'react-bootstrap';
import filtrBaterie from '../assets/graphics/filtr_baterie.svg';
import filtrElektronika from '../assets/graphics/filtr_elektronika.svg';
import filtrLeki from '../assets/graphics/filtr_leki.svg';
import filtrMakulatura from '../assets/graphics/filtr_makulatura.svg';
import filtrMetale from '../assets/graphics/filtr_metale.svg';
import filtrNakretki from '../assets/graphics/filtr_nakretki.svg';
import filtrPlastik from '../assets/graphics/filtr_plastik.svg';
import filtrGabaryty from '../assets/graphics/filtr_gabaryty.svg';
import filtrMgo from '../assets/graphics/filtr_mgo.svg';
import filtrPszok from '../assets/graphics/filtr_pszok.svg';
import filtrDom from '../assets/graphics/filtr_dom.svg';
import filtrPubliczne from '../assets/graphics/filtr_publiczne.svg';
import filtrKwarantanna from '../assets/graphics/filtr_virus.svg';
import filtrSzpital from '../assets/graphics/filtr_szpital.svg';

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
        return (<ListGroup.Item className="active" action variant="light" onClick={() => props.setFilter(removeElement(props.filter, props.name))}><div><img alt="" src={props.icon} style={{ width: '3vh' }} /><span style={{verticalAlign: 'middle', margin: 10}}>{props.name}</span></div></ListGroup.Item>);
    else
        return (<ListGroup.Item action variant="light" onClick={() => props.setFilter([...props.filter, props.name])}><div><img alt="" src={props.icon} style={{ width: '3vh'}} /><span style={{verticalAlign: 'middle', margin: 10}}>{props.name}</span></div></ListGroup.Item>);
}

const MapFiltering = (props) => {
    if (props.screen === 'CollectionsMapScreen')
        return (
            <div style={mapFilteringStyle}>
                <h5 style={{ margin: '2vh' }}>FILTROWANIE</h5>
                <ListGroup>
                    <FilteredElement name="Leki" icon={filtrLeki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Baterie" icon={filtrBaterie} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Makulatura" icon={filtrMakulatura} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Metal" icon={filtrMetale} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Elektronika" icon={filtrElektronika} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Butelki" icon={filtrPlastik} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Nakrętki" icon={filtrNakretki} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Gabaryty" icon={filtrGabaryty} filter={props.filter} setFilter={props.setFilter} />
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
                    <FilteredElement name="Izolatoria domowe" icon={filtrDom} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Izolatoria stacjonarne" icon={filtrPubliczne} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Kwarantanna" icon={filtrKwarantanna} filter={props.filter} setFilter={props.setFilter} />
                    <FilteredElement name="Szpitale" icon={filtrSzpital} filter={props.filter} setFilter={props.setFilter} />
                </ListGroup>
            </div>
        );
}

export default MapFiltering;

const mapFilteringStyle = {
    'borderRadius': "10px",
    'position': "absolute",
    'left': -5,
    'marginTop': "15vh",
    'background': "rgba(191, 222, 222, 1)",
    'filter': "drop-shadow(5px 5px 6px rgba(215, 215, 215, 0.161))",
    'zIndex': 1000
}

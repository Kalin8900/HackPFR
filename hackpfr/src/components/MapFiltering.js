import React from "react";
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faBatteryQuarter, faTools, faBolt, faPills, faRecycle } from '@fortawesome/free-solid-svg-icons'

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
        return (<ListGroup.Item className="active" action variant="light" onClick={() => props.setFilter(removeElement(props.filter, props.name))}><FontAwesomeIcon icon={props.icon} /> {props.name}</ListGroup.Item>);
    else
        return (<ListGroup.Item action variant="light" onClick={() => props.setFilter([...props.filter, props.name])}><FontAwesomeIcon icon={props.icon} /> {props.name}</ListGroup.Item>);
}

const MapFiltering = (props) => {

    return (
        <div style={mapFilteringStyle}>
            <h6 style={{ margin: '2vh' }}>FILTROWANIE</h6>
            <ListGroup>
                <FilteredElement name="Makulatura" icon={faCopy} filter={props.filter} setFilter={props.setFilter} />
                <FilteredElement name="Baterie" icon={faBatteryQuarter} filter={props.filter} setFilter={props.setFilter} />
                <FilteredElement name="Metal" icon={faTools} filter={props.filter} setFilter={props.setFilter} />
                <FilteredElement name="Elektronika" icon={faBolt} filter={props.filter} setFilter={props.setFilter} />
                <FilteredElement name="Leki" icon={faPills} filter={props.filter} setFilter={props.setFilter} />
                <FilteredElement name="Nakrętki" icon={faRecycle} filter={props.filter} setFilter={props.setFilter} />
            </ListGroup>
        </div>
    );
}

export default MapFiltering;

const mapFilteringStyle = {
    'height': "80vh",
    'width': 200,
    'borderRadius': "10px",
    'position': "absolute",
    'left': 20,
    'marginTop': "5vh",
    'background': "rgba(255,255,255,1)",
    'filter': "drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.161))",
    'zIndex': 1000
}

import React from "react";
import { Table } from 'react-bootstrap';

const CollectionSummary = () => {

    return (
        <div id="collectionSummary" style={collectionSummaryStyle}>
            <div style={{}}>
                <h5 style={{ margin: '2vh' }}>RANKING ZBIÓREK</h5>
                <h6>Zebrano 5432 kg</h6>
            </div>
            <Table borderless hover striped style={{'background': "rgba(253, 253, 254, 1)"}}>
                <tbody>
                    <tr>
                        <td>II Liceum Ogólnokształcące</td>
                        <td style={nowrap}>154 kg</td>
                    </tr>
                    <tr>
                        <td>Szkoła Podstawowa Nr 2</td>
                        <td style={nowrap}>120 kg</td>
                    </tr>
                    <tr>
                        <td>Zespół Szkół Budowlanych i Geodezyjnych</td>
                        <td style={nowrap}>98 kg</td>
                    </tr>
                    <tr>
                        <td>Zespół Szkół Ekonomicznych i  Mundurowych</td>
                        <td style={nowrap}>77 kg</td>
                    </tr>
                    <tr>
                        <td>Zespół Szkolno Przedszkolny Nr 3 z Oddziałami Integracyjnymi</td>
                        <td style={nowrap}>49 kg</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default CollectionSummary;

const collectionSummaryStyle = {
    'width': '17vw',
    'borderRadius': "10px",
    'position': "absolute",
    'right': 0,
    'marginTop': "15vh",
    'background': "rgba(191, 222, 222, 1)",
    'filter': "drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.161))",
    'zIndex': 1000
}

const nowrap = {
    'white-space': 'nowrap'
}
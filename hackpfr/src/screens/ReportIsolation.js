import React, { useState, Component, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import locations from '../assets/geodata/locations.json';
import Select from 'react-select';
import { FixedSizeList as List } from "react-window";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faArrowAltCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import L from "leaflet";
import axios from 'axios';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import { Link } from 'react-router-dom';
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

async function requestAddress(coords) {
    let result;

    try {
        result = await axios({
            method: 'get',
            url: 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + coords.lat + '&lon=' + coords.lng,
            data: [],
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (result.status === 200) {
            result = { status: 200, data: result.data };
        } else {
            result = { status: result.status, text: result.statusText };
        }
    } catch (error) {
        result = { status: '?', text: error.toString() };
    } finally {
        return result;
    }
}

function ReportIsolation() {
    const [mode, setMode] = useState(1);
    const [address, setAddress] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalAddress, setModalAddress] = useState("brak");

    const addresses = locations.map((location) => { return { value: location.id, label: location.address } });

    useEffect(() => {
        if (modalShow) {
            //map init
            let mymap = L.map('map').setView([51.1356319, 23.4546863], 12, { zoomControl: true });
            //maps max&min zoom levels
            mymap.options.minZoom = 10;
            mymap.options.maxZoom = 18;

            L.tileLayer('https://api.mapbox.com/styles/v1/bwiktorz/ckhsxkw1v1sbg1amkta7gi207/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYndpa3RvcnoiLCJhIjoiY2p0OGh6OWtuMDhmNDN5cXk4ZTEzMDltYiJ9.UVVfRCnZuTePUEoenfBOKA',{}).addTo(mymap)

            const myIcon = L.icon({
                iconAnchor: [11, 40],
                iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII='
            })

            let marker = null;

            mymap.on('click', function (e) {
                const coords = e.latlng;
                if (marker !== null)
                    mymap.removeLayer(marker)
                marker = new L.Marker(coords, { draggable: true, icon: myIcon });

                marker.on('dragend', function (e) {
                    const coords = e.target._latlng;
                    requestAddress(coords).then((res) => {
                        if (res.status === 200)
                            if (res.data.address.road === undefined || res.data.address.house_number === undefined)
                                setModalAddress("brak");
                            else
                                setModalAddress(res.data.address.road + " " + res.data.address.house_number);
                        else
                            setModalAddress("brak");
                    });
                });

                mymap.addLayer(marker);
                requestAddress(coords).then((res) => {
                    if (res.status === 200)
                        if (res.data.address.road === undefined || res.data.address.house_number === undefined)
                            setModalAddress("brak");
                        else
                            setModalAddress(res.data.address.road + " " + res.data.address.house_number);
                    else
                        setModalAddress("brak");
                });
            })
        }
    }, [modalShow]);

    const selectAddress = () => {
        if (modalAddress !== "brak") {
            for (let i in addresses) {
                if (addresses[i].label.toLowerCase() === modalAddress.toLowerCase()) {
                    setAddress(addresses[i]);
                    return;
                }
            }
        }
        setAddress(null);
    }

    const handleClose = () => {
        setModalShow(false);
        selectAddress();
    }

    return (
        <Container className='page' style={{backgroundColor: mt.colors.pageBackground}}>
            <Container style={{ textAlign: 'left'}}>
                <Modal size="lg" centered show={modalShow} onHide={() => setModalShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Wybierz adres</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="map" style={{ height: '70vh' }} />
                    </Modal.Body>
                    <Modal.Footer>
                        Wybrany adres: {modalAddress === "brak" ? <p style={{ color: 'red' }}>{modalAddress}</p> : <p style={{ color: 'green' }}>{modalAddress}</p>}
                        <Button variant="primary" onClick={() => handleClose()}>OK</Button>
                    </Modal.Footer>
                </Modal>
                {mode === 1 &&
                    <Card>
                        <Card.Header>ZGŁASZANIE IZOLACJI</Card.Header>
                        <Card.Body>
                            <Container>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Numer telefonu</Form.Label>
                                        <Form.Control type="email" placeholder="Wprowadź numer telefonu" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Adres</Form.Label>
                                        <Row>
                                            <Col xs={11}>
                                                <Select isMulti={false} components={{ MenuList }} isSearchable={true} value={address} placeholder={"Wybierz adres..."} options={addresses} onChange={setAddress} noOptionsMessage={() => "Nie znaleziono adresu"} />
                                            </Col>
                                            <Col xs={1}>
                                                <Button variant="success" onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faMapMarker} /></Button>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Daty izolacji/kwarantanny</Form.Label>
                                        <Row>
                                            <Col xs={5}>
                                                <MaskedFormControl type='text' name='dateTo' placeholder="Wprowadź datę rozpoczęcia (RRRR-MM-DD)" mask='1111-11-11' />
                                            </Col>
                                            <Col xs={2} style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
                                            </Col>
                                            <Col xs={5}>
                                                <MaskedFormControl type='text' name='dateTo' placeholder="Wprowadź datę zakończenia (RRRR-MM-DD)" mask='1111-11-11' />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Button variant="success" block onClick={() => setMode(2)}>Dalej</Button>
                                </Form>
                            </Container>
                        </Card.Body>
                    </Card>
                }{
                    mode === 2 &&
                    <Card>
                        <Card.Header>DODAWANIE ZBIÓRKI</Card.Header>
                        <Card.Body>
                            <Card.Title>Weryfikacja:</Card.Title>
                            <Container>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Wprwadź kod, który wysłaliśmy SMS na Twój telefon</Form.Label>
                                        <Form.Control type="email" placeholder="Wprowadź kod weryfikujący" />
                                    </Form.Group>
                                    <Button variant="success" block onClick={() => setMode(3)}>Dalej</Button>
                                </Form>
                            </Container>
                        </Card.Body>
                    </Card>
                }
                {
                    mode === 3 &&
                    <div style={{ justifyContent: "center", display: 'flex', flexFlow: 'column', alignItems: 'center', gap: '3.5vh'}}>
                        <FontAwesomeIcon color='green' icon={faCheckCircle} size="4x" />
                        <h1 style={{}}>Miejsce pomyślnie dodane</h1>
                        <Link to="/"><Button variant="success">Strona główna</Button></Link>
                    </div>
                }
            </Container>

        </Container>
    );
}

const height = 35;

class MenuList extends Component {
    render() {
        const { options, children, maxHeight, getValue } = this.props;
        const [value] = getValue();
        const initialOffset = options.indexOf(value) * height;

        return (
            <List
                height={maxHeight}
                itemCount={children.length}
                itemSize={height}
                initialScrollOffset={initialOffset}
            >
                {({ index, style }) => <div style={style}>{children[index]}</div>}
            </List>
        );
    }
}

export default ReportIsolation;
import React from "react";
import {Container, Card, Button, Modal, Form} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle, faPen} from '@fortawesome/free-solid-svg-icons'
import collections from '../assets/geodata/collections.json';
import {ToastContainer, toast} from 'react-toastify';
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

class UpdateCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 1,
            data: [],
            modalShow: null
        }
        this.textBoxRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            data: collections.features.map((item) => {
                return {
                    id: item.properties.id,
                    name: item.properties.name,
                    organizer: item.properties.organizer,
                    created: item.properties.created,
                    fraction: item.properties.fraction,
                    amount: item.properties.amount,
                    action: <><Button variant="primary"
                                      onClick={() => this.handleEdit(item.properties.id)}><FontAwesomeIcon
                        icon={faPen}/></Button> <Button variant="danger"
                                                        onClick={() => this.handleDelete(item.properties.id)}><FontAwesomeIcon
                        icon={faTimesCircle}/></Button></>
                }
            })
        });
    }

    handleDelete = id => {
        let newData = [];
        for (let i in this.state.data) {
            if (this.state.data[i].id !== id)
                newData = [...newData, this.state.data[i]];
        }
        toast.success('Pomyślnie zamknięto zbiórkę');
        this.setState({data: newData});
    }

    handleEdit = id => {
        let val = '';
        for (let i in this.state.data) {
            if (this.state.data[i].id === id)
                val = this.state.data[i].amount;
        }
        this.setState({modalShow: id}, () => {
            this.textBoxRef.current.value = val;
        });
    }

    handleClose = () => {
        this.setState({modalShow: null});
    }

    handleSave = () => {
        let newData = [];
        for (let i in this.state.data) {
            let element = {...this.state.data[i]};
            if (this.state.data[i].id !== this.state.modalShow) {
                newData = [...newData, element];
            } else {
                element.amount = parseInt(this.textBoxRef.current.value);
                newData = [...newData, element];
            }
        }
        toast.success('Zmiany zapisane');
        this.setState({modalShow: null, data: newData});
    }

    render() {

        const columns = [{
            dataField: 'name',
            text: 'Nazwa',
            sort: true,
            style: {
                textAlign: "center",
                verticalAlign: "middle"
            }
        }, {
            dataField: 'organizer',
            text: 'Organizator',
            sort: true,
            style: {
                textAlign: "center",
                verticalAlign: "middle"
            }
        }, {
            dataField: 'created',
            text: 'Utworzona',
            sort: true,
            style: {
                textAlign: "center",
                verticalAlign: "middle"
            }
        }, {
            dataField: 'fraction',
            text: 'Frakcja',
            sort: true,
            style: {
                textAlign: "center",
                verticalAlign: "middle"
            }
        }, {
            dataField: 'amount',
            text: 'Ilość',
            sort: true,
            style: {
                textAlign: "center",
                verticalAlign: "middle"
            }
        }, {
            dataField: 'action',
            text: 'Akcje',
            sort: false,
            style: {
                textAlign: "center",
                verticalAlign: "middle"
            }
        }];

        const defaultSorted = [{
            dataField: 'created',
            order: 'asc'
        }];

        return (
            <Container className='page' style={{backgroundColor: mt.colors.pageBackground}}>

                <Container style={{textAlign: 'left', marginTop: '4vh'}}>
                    <ToastContainer/>
                    <Modal centered show={this.state.modalShow !== null} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Aktualizacja zbiórki</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Ilość zebranych zasobów</Form.Label>
                                    <Form.Control type="email" placeholder="Wprowadź ilość zebranych zasobów"
                                                  ref={this.textBoxRef}/>
                                    <Form.Text className="text-muted">Wartość ta zostanie wysłana do urzędu oraz
                                        zapisana w rankingach.</Form.Text>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleSave}>Zapisz</Button>
                            <Button variant="danger" onClick={this.handleClose}>Anuluj</Button>
                        </Modal.Footer>
                    </Modal>
                    {
                        this.state.mode === 1 &&
                        <Card>
                            <Card.Header>AKTUALIZACJA ZBIÓRKI</Card.Header>
                            <Card.Body>
                                <Card.Title>Dane kontaktowe</Card.Title>
                                <Container>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Numer telefonu</Form.Label>
                                            <Form.Control type="email" placeholder="Wprowadź numer telefonu"/>
                                            <Form.Text className="text-muted">Ten sam, który wprowadzono przy tworzeniu
                                                zbiórki.</Form.Text>
                                        </Form.Group>
                                        <Button variant="success" block
                                                onClick={() => this.setState({mode: 2})}>Dalej</Button>
                                    </Form>
                                </Container>
                            </Card.Body>
                        </Card>
                    }{
                    this.state.mode === 2 &&
                    <Card>
                        <Card.Header>AKTUALIZACJA ZBIÓRKI</Card.Header>
                        <Card.Body>
                            <Card.Title>Weryfikacja:</Card.Title>
                            <Container>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Wprwadź kod, który wysłaliśmy SMS na Twój telefon</Form.Label>
                                        <Form.Control type="email" placeholder="Wprowadź kod weryfikujący"/>
                                    </Form.Group>
                                    <Button variant="success" block onClick={() => {
                                        toast.success('Zweryfikowano poprawnie');
                                        this.setState({mode: 3})
                                    }}>Dalej</Button>
                                </Form>
                            </Container>
                        </Card.Body>
                    </Card>
                }{
                    this.state.mode === 3 &&
                    <Card>
                        <Card.Header>AKTUALIZACJA ZBIÓRKI</Card.Header>
                        <Card.Body>
                            <Card.Title>Zbiórki powiązane z tym numerem telefonu:</Card.Title>
                            <Container>
                                <BootstrapTable striped hover
                                                defaultSorted={defaultSorted}
                                                bootstrap4
                                                keyField="id"
                                                data={this.state.data}
                                                columns={columns}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                }
                </Container>
            </Container>

        );
    }
}

export default UpdateCollection;
import React, { useState, Component } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FixedSizeList as List } from "react-window";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import mainTheme from "../assets/graphics/theme";
import { FilePicker } from 'react-file-picker';

const mt = mainTheme;

function ReportIsolation(props) {
    const [mode, setMode] = useState(1);

    return (
        <Container className='page' style={{ backgroundColor: mt.colors.pageBackground }}>
            <Container style={{ textAlign: 'left' }}>
                {mode === 1 &&
                    <Card>
                        <Card.Header>IMPORT ADRESÓW W IZOLACJI/KWARANTANNIE Z CSV</Card.Header>
                        <Card.Body>
                            <Container>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Wgraj plik csv</Form.Label>
                                        <FilePicker
                                            extensions={['csv']}
                                        >
                                            <Button variant="primary" onClick={() => setMode(2)}>Kliknij, aby wgrać plik</Button>
                                        </FilePicker>
                                    </Form.Group>
                                    <Button variant="success" block onClick={() => setMode(2)}>Dalej</Button>
                                </Form>
                            </Container>
                        </Card.Body>
                    </Card>
                }{
                    mode === 2 &&
                    <div style={{ justifyContent: "center", display: 'flex', flexFlow: 'column', alignItems: 'center', gap: '3.5vh' }}>
                        <FontAwesomeIcon color='green' icon={faCheckCircle} size="4x" />
                        <h1 style={{}}>Adresy zaimportowane pomyślnie</h1>
                        <Link to="/covid"><Button variant="success">Powrót do mapy</Button></Link>
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
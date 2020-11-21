import React, {useState, Component, useEffect} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import BigButton from "../components/BigButton";
import {toast, ToastContainer} from "react-toastify";


const CityScreen = props => {
    const cookie = document.cookie.split(' ')
    const [logged, setLogged] = useState(cookie[0].substr(5))

    //MAKIETA
    useEffect(() => {
        if (cookie.length > 1) {
            if (logged === 'urząd' || logged === 'sanepid')
                document.cookie = document.cookie.substr(0, document.cookie.length - 1) + (parseInt(cookie[1].substr(4)) + 1) + ' ';

            if (cookie[1].substr(4) === '1')
                toast.success('Zalogowano pomyślnie jako ' + logged);
        }
    }, [logged])


    if (logged !== 'urząd' && logged !== 'sanepid' && logged !== 'clean')
        return <Redirect to='/'/>

    return (
        <Container>
            <ToastContainer/>
            <Row>
                <Col>
                    {
                        (logged === 'urząd') ?
                            <BigButton className='homeBtn' path='/declarations'>
                                Mapa deklaracji
                            </BigButton> :
                            <BigButton className='homeBtn' disabled path='/declarations'>
                                Mapa deklaracji
                            </BigButton>

                    }

                </Col>
                <Col>
                    <BigButton className='homeBtn' path='/covid'>
                        Mapa COVID
                    </BigButton>
                </Col>
            </Row>
        </Container>
    )
}

export default CityScreen;
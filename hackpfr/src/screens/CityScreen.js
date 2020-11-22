import React, {useState,useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';

import BigButton from "../components/BigButton";
import {toast, ToastContainer} from "react-toastify";
import {coloredBtnStyle} from "../assets/graphics/styles";
import mainTheme from "../assets/graphics/theme";
import {auth} from "../firebase";

const mt = mainTheme


const CityScreen = props => {
    const [user, setUser] = useState(props.user);

    //MAKIETA
    useEffect(() => {
        if(user)
            toast.success('Zalogowano pomyślnie jako ' + user.displayName)
    }, [user])

    return (
        <Container className='page' style={{background: mt.colors.pageBackground}}>
            <ToastContainer/>
            <Container>
                <Row>
                    <Col>
                        {
                            (auth.currentUser.displayName === 'urząd') ?
                                <BigButton style={coloredBtnStyle} className='homeBtn logBtn' path='/declarations'>
                                    Mapa deklaracji
                                </BigButton> :
                                <BigButton style={coloredBtnStyle} className='homeBtn logBtn dis' disabled path='/declarations'>
                                    Mapa deklaracji
                                </BigButton>
                        }
                    </Col>
                    <Col>
                        <BigButton style={coloredBtnStyle} className='homeBtn logBtn' path='/covid'>
                            Mapa COVID
                        </BigButton>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default CityScreen;
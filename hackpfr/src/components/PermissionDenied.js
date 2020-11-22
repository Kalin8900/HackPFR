import React from "react";
import { Container, Spinner } from "react-bootstrap";
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

const PermissionDenied = props => {
    return (
        <Container className='page' style={{ background: mt.colors.pageBackground, justifyContent: 'center', flexFlow: 'column' }}>
            <Spinner animation="border" variant="info" />
        </Container>
    )
}

export default PermissionDenied
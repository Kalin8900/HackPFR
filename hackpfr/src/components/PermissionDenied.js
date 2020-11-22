import React from "react";
import {Container} from "react-bootstrap";
import mainTheme from "../assets/graphics/theme";
const mt = mainTheme;

const PermissionDenied = props => {
    return(
        <Container className='page' style={{background: mt.colors.pageBackground, justifyContent: 'center', flexFlow: 'column'}}>
            <h2>Upss...</h2>
            <h4>I think you shouldn't be here</h4>
        </Container>
    )
}

export default PermissionDenied
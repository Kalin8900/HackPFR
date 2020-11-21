import {Button, Nav} from "react-bootstrap";
import React from "react";

const BigButton = props => {

    return (
        <Nav.Link href={props.path}>
            <Button size={"lg"} block>
                {props.children}
            </Button>
        </Nav.Link>
    )
}

export default BigButton;
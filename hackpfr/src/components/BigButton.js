import {Button, Nav} from "react-bootstrap";
import React from "react";

const BigButton = props => {

    return (
        <Nav.Link href={props.path}>
            <Button className={props.className} size={"lg"} block {...props}>
                {props.children}
            </Button>
        </Nav.Link>
    )
}

export default BigButton;
import React, {useEffect} from "react";
import {auth} from "../firebase";
import {Redirect} from 'react-router-dom'

const LogOut = props => {
    const user = props.user;

    useEffect(() => {
        if(user)
            auth.signOut()
                .then(() => {});

    })

    return (
        <Redirect to='/' />
    )
}

export default LogOut;
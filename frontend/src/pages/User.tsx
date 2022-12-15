import React, {useEffect, useState} from "react"
import axios from "axios";
import {Container, Typography} from "@mui/material";
import {UserType} from "../models/User";

const User = () => {
    const [user, setUser] = useState<UserType>()

    useEffect(() => {
        axios.get('/user')
            .then(response => {
                setUser(response.data as UserType)
            })
    }, [])

    return (<Container>
        {user && <Typography>user's name: {user.name}</Typography>}
    </Container>)
}

export default User;
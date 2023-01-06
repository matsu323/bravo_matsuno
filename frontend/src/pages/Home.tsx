import React from "react"
import {Button, Container, Typography, Box} from "@mui/material";
import "../assets/styles/BackgroundGradation.css"

const Home = () => {
    return (<>
        <Container className="App">
            <Typography variant="h1" fontFamily={'"Helvetica Neue", sans-serif'}>T2CALENDAR</Typography>
            <Box sx={{height:60}}/>
            <Button href="/user/mycalendar">MY CALENDAR</Button>
            <Box sx={{height:20}}/>
            <Button href="/user/login">LOGIN</Button>
            <Box sx={{height:20}}/>
            <Button href="/user/login">LOGOUT</Button>
            <Box sx={{height:20}}/>
            <Button href="/user/login">NEW ACCOUNT</Button>
        </Container>
    </>)
}

export default Home;
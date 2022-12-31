import React, {useState} from "react";
import {Button, Container, TextField, Typography} from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import "../assets/styles/BackgroundGradation.css"

const Home = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post('/login', {
            name: name,
            password: password
        }).then(() => {
            console.log("ログイン成功")
        })
    }

    return (<>
        <Container className="App">
                <Typography variant="h3">Login Page</Typography>
                <Box sx={{height:60}}/>
                <form onSubmit={login}>
                    <div>
                        <TextField required label="ユーザー名" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <Box sx={{height:20}}/>
                    <div>
                        <TextField required label="パスワード" type={"password"} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Box sx={{height:30}}/>
                    <div>
                        <Button variant="contained" type="submit">ログイン</Button>
                    </div>
                </form>
        </Container>
    </>)
}

export default Home;
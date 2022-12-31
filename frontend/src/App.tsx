import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import User from "./pages/User";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

function App() {
    const [cookies] = useCookies();

    useEffect(() => {
        if (cookies.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.token}`
        }
    }, [cookies])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/user"} element={<User/>}/>
                    <Route path={"/user/login"} element={<UserLogin/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

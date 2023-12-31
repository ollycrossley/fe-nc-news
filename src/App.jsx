// import { useState } from 'react'

import './mystyle.css'
import './App.css'

import NavBar from "./components/NavBar.jsx";
import Articles from "./components/Articles/Articles.jsx";
import Users from "./components/Users/Users.jsx";
import Home from "./components/Home.jsx";
import {Route, Routes} from "react-router-dom";
import SingleArticlePage from "./components/Articles/SingleArticlePage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="*" element={<ErrorPage />}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/articles/:article_id" element={<SingleArticlePage/>}/>
                <Route path="/articles/topics/:topic" element={<Articles/>}/>
                <Route path="/users" element={<Users/>}/>
            </Routes>
        </>
    )
}

export default App

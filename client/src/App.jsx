import React, { useState } from "react";
import { Route,Routes } from 'react-router-dom'
import LangflowApp from "./Componets/LangflowApp.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Home from "./Pages/Home.jsx";
import OurActualteam from "./Componets/OurActualteam.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
    
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<LangflowApp/>}/>
        <Route path='/ourteam' element={<OurActualteam/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes> 
    );
}

export default App;


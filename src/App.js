// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/header";
import Restaurant from "./components/restaurant";
import ThankYou from "./components/thankYou";

// constants
import { THANKYOU } from "./constants/routes";

// css
import './app.css'

function App() {
    return (
      <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Restaurant/>} />
                <Route path={`/${THANKYOU}`} element={<ThankYou/>} />
            </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;

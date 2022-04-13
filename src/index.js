// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import App from "./App";
import ThankYou from "./components/thankYou";

// css
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/thankyou" element={<ThankYou/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

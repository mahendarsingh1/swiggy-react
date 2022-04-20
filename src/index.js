// Libraries
import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";

// store
import store from "./store"

// components
import App from "./App";

// css
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

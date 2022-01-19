import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/AppContextProvider";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

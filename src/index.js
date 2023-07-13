import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./Main.css";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

reportWebVitals();

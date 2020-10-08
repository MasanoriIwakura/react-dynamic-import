import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/App";

const entrypoint = document.querySelector("#container");
entrypoint ? ReactDOM.render(<App />, entrypoint) : false;

import React from "react";
import ReactDOM  from "react-dom";
import "./index.css"
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { inititalState } from "./context/InitialState";

ReactDOM.render(
<Router>
   <StateProvider initialState={inititalState} reducer={reducer}>
   <App/>
   </StateProvider>
</Router>,
document.getElementById("root")
);
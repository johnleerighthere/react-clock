import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

function tick(){

const element = (<div>The date is:{new Date().toLocaleTimeString()}</div>);

ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000)




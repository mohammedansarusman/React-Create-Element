import React from "react";
import ReactDOM from "react-dom/client"

const container = React.createElement("div",{className:"title"},
    [
        React.createElement("h1",{},"Welcome to React Code Basics"),
        React.createElement("h2",{},"Welcome to React Code Basics"),
        React.createElement("h3",{},"Welcome to React Code Basics"),
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)


import React from "react";
import ReactDOM from "react-dom/client"

// ********************************************************************
// Create an React element
// ********************************************************************

/*
const container = React.createElement("div",{className:"title"},
    [
        React.createElement("h1",{},"Welcome to React Code Basics"),
        React.createElement("h2",{},"Welcome to React Code Basics"),
        React.createElement("h3",{},"Welcome to React Code Basics"),
    ]
)
*/

// ********************************************************************
// Create an React element using JSX
// ********************************************************************


const head1 = <h1 className="hd1">Welcome to React component</h1>
const head2 = <h2 className="hd2">From Namaste React</h2>
const head3 = <h3 className="hd3">Tutor Akshay</h3>

const container = (
        <div className="title">
            {head1}
            {head2}
            {head3}
        </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)


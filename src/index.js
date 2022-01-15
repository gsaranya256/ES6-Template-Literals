import React from "react";
import ReactDOM from "react-dom";

const fname = "Saranya";
const lname = "Gopinath";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}</h1>
    <h2>
      Hello {fname} {lname}
    </h2>
    <h3> Hello {fname + " " + lname}</h3>
    <p>Your roll number is {num}</p>
    <p> Your number is {3 + 3}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,

  document.getElementById("root")
);

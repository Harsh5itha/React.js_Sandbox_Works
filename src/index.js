import React from "react";
import ReactDOM from "react-dom";

const fName = "Harshitha";
const lName = "T";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fName + " " + lName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

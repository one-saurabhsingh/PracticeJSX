import React from "react";
import ReactDOM from "react-dom";

const name = "Saurabh";
const currentDate = new Date();
const year = currentDate.getFullYear();
const a = currentDate;
console.log(currentDate);

ReactDOM.render(
  <div>
    <p>Created by {name}</p>

    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

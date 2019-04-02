import React from "react";
import "./style.css";

function Form({onClick}) {
    return (
      <div id="book_form" className="container">
        <input type="text" />
        <button className="btn" onClick={onClick}>Search</button>
        <div id="results"></div>
      </div>
    )
}

export default Form;
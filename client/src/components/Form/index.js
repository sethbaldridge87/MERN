import React from "react";
import "./style.css";

function Form(props) {
    return (
      <div id="book_form" className="container">
        <input type="text" onChange={props.onChange}/>
        <button className="btn" onClick={props.onClick}>Search</button>
        <div id="results"></div>
      </div>
    )
}

export default Form;
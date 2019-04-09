import React from "react";
import "./style.css";

function Parallax() {
    return (
        <div>
            <div className="parallax-container">
                <h1 id="greeter">Look at the Book Nook!</h1>
                <div className="parallax">
                    <img src="images/back1.jpg" alt="background1"/>
                </div>
            </div>
        </div>
    )
}

export default Parallax;
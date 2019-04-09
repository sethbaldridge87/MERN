import React from "react";
import "./style.css";

function Nav() {
    return (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Book Nook</a>
            <ul id="nav-mobile" className="right">
                <li><a href="/">Search</a></li>
                <li><a href="/saved">Saved</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;
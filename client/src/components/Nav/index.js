import React from "react";
import "./style.css";

function Nav() {
    return (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right">
                <li><a href="/">Search</a></li>
                <li><a href="/">Saved</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;
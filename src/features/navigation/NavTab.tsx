import {Link} from "react-router-dom";
import React from "react";

export function NavTab() {
    return (
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <Link className={"navbar-brand"} to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}>
                    </li>
                    <li>
                        <Link className={"nav-link"} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={"nav-link"} to="/counter">Counter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
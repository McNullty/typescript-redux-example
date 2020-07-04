import {NavLink} from "react-router-dom";
import React from "react";

export function NavTab() {
    return (
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <NavLink activeClassName="active" className={"navbar-brand"} to="/">Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className={"nav-link"} to="/echo/changeMe">Echo</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className={"nav-link"} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className={"nav-link"} to="/counter">Counter</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className={"nav-link"} to="/redirect">Redirect</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
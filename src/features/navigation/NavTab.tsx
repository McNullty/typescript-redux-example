import {NavLink} from "react-router-dom";
import React from "react";
import {logout} from "../login/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";

export const NavTab: React.FC = () => {
    const dispatch = useDispatch();

    const {isAuthenticated} = useSelector(
        (state: RootState) => state.login
    )

    let signIn = !isAuthenticated ? (
        <li>
            <NavLink activeClassName="active" className="nav-link" to="/login">Sign In</NavLink>
        </li>
    ) : null;

    let signOut = isAuthenticated ? (
        <li>
            <a className="nav-link" onClick={e => {
                e.preventDefault();
                dispatch(logout());
            }} href="/" >Sign Out</a>
        </li>
    ) : null;

    let privatePage = isAuthenticated ? (
        <li>
            <NavLink activeClassName="active" className="nav-link" to="/protected">Private</NavLink>
        </li>
    ) : null;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink activeClassName="active" className="navbar-brand" to="/">Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    <li className="nav-item">
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav-link" to="/echo/changeMe">Echo</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav-link" to="/counter">Counter</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="nav-link" to="/redirect">Redirect</NavLink>
                    </li>
                    {privatePage}
                    {signIn}
                    {signOut}
                </ul>
            </div>
        </nav>
    );
}
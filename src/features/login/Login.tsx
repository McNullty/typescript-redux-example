import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { login } from "./loginSlice";
import {RootState} from "../../app/store";
import {Redirect} from "react-router";

export const Login: React.FC = () => {

    const dispatch = useDispatch();
    const [cred, setCred] = useState({email: "" , password: "" });

    const {isLoading, isAuthenticated } = useSelector(
        (state: RootState) => state.login
    )

    let spinner = isLoading ? (
        <div className="d-flex justify-content-center" >
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : null;

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Sign In</h2>
                    <form onSubmit={e => {
                        e.preventDefault();
                        dispatch(login(cred.email, cred.password));
                    }}>
                        <fieldset>
                            <fieldset className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={cred.email}
                                    onChange={e => setCred({ ...cred, email: e.target.value})}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={cred.password}
                                    onChange={e => setCred({ ...cred, password: e.target.value})}
                                />
                            </fieldset>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Sign in</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            {spinner}
        </div>
    );
}

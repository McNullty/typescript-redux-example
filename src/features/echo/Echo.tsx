import React from "react";
import {useParams} from "react-router";

export const Echo: React.FC = () => {
    let { message } = useParams();

    return (
        <div>
            <h2>Echo</h2>
            <div>
                <h4>Message: {message}</h4>
            </div>
        </div>
    );
}

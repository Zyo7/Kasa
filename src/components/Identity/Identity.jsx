import React from "react";

const Identity = (props) => (
    <div>
        <p>{props.identity.host["name"]}</p>
        <img src={props.identity.host["picture"]} alt="identité temporaire" />
        <i>{props.identity.rating}</i>
    </div>
);

export default Identity;
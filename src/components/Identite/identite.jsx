import React from "react";

const Identite = (props) => (
    <div>
        <p>{props.identite.host["name"]}</p>
        <img src={props.identite.host["picture"]} alt="identité temporaire" />
        <i>{props.identite.rating}</i>
    </div>
);

export default Identite;
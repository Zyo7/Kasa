import React from "react";

const Localisation = (props) => (
    <div>
        <h1>{props.localisation.title}</h1>
        <h2>{props.localisation.location}</h2>
        <p>{props.localisation.tags[0]}</p>
        <p>{props.localisation.tags[1]}</p>
    </div>
);

export default Localisation;
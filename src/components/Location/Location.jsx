import React from "react";

const Location = (props) => (
    <div>
        <h1>{props.location.title}</h1>
        <h2>{props.location.location}</h2>
        <p>{props.location.tags[0]}</p>
        <p>{props.location.tags[1]}</p>
    </div>
);

export default Location;
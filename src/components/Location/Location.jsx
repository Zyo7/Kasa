import React from "react";

const Location = (props) => (
    <article className="infoLocation__location">
        <h1 className="infoLocation__location--title">{props.location.title}</h1>
        <h2 className="infoLocation__location--town">{props.location.location}</h2>
        {props.location.tags.map(tag =>(
            <p className="infoLocation__location--tags">{tag}</p>
        ))}
    </article>
);

export default Location;
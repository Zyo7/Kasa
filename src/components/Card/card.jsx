import React from "react";

function Card (props){
    const url = "property/"+props.preview.id;
    const src = props.preview.cover;
    const title= props.preview.title;

    return <article className="homePage__card" style={{backgroundImage: `url(${src})`}}>
        <a href={url} className="homePage__card--link">
            <p className="homePage__card--title">{title}</p>
        </a>
    </article>
}

/*
function Card2 (props){
        const url = "property/"+props.preview.id;
        const src = props.preview.cover;
        const title= props.preview.title;

        return <article className="card">
            <a href={url} className="card__link">
                <img src={src} alt="Carte temporaire" />
                <p className="card__link--title">{title}</p>
            </a>
        </article>
}
*/

export default Card;
import React from "react";



function Card (props){
        const url = "propriete/"+props.preview.id;
        const src = props.preview.cover;
        const title= props.preview.title;

        return <div>
        <div>
            <a href={url}>
                <img src={src} alt="Carte temporaire" />
                <p>{title}</p>
            </a>
        </div>
    </div>
}

export default Card;
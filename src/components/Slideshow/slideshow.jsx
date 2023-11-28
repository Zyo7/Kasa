import React from "react";

const Slideshow = (props) => (
    <div>
        <img src={props.slide.pictures[0]} alt="slideshow temporaire" />
        <img src="#" alt="fleche gauche temporaire" />
        <img src="#" alt="fleche droite temporaire" />
        <p>Numéro de la slideshow temporaire</p>
    </div>
);

export default Slideshow;
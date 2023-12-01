import React from "react";
import { ReactComponent as ArrowForward } from "../../assets/arrow_forward.svg";
import { ReactComponent as ArrowBack } from "../../assets/arrow_back.svg";

function Slideshow(props){

    return <section className="infoGalery">
        <img src={props.slide.pictures[0]} alt="slideshow temporaire" className="infoGalery__image" />
        <ArrowBack className="infoGalery__nav back"/>
        <ArrowForward className="infoGalery__nav forward" />
        <p className="infoGalery__nav number">1/10</p>
    </section>
}

export default Slideshow;
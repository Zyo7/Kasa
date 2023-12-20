import {React, useState, useEffect} from "react";
import { ReactComponent as ArrowForward } from "../../assets/arrow_forward.svg";
import { ReactComponent as ArrowBack } from "../../assets/arrow_back.svg";

function Slideshow(props) {
    const maxCount = props.slide.pictures.length;
    const [count, setCount] = useState(0);
    const src = props.slide.pictures;

    const nextSlide = () => {
        count < maxCount-1 ? setCount(count+1) : setCount(0);
    }

    const previousSlide = () => {
        count > 0 ? setCount(count-1) : setCount(maxCount-1);
    }

    useEffect(()=>{}, [count]);

    return <section className="infoGalery" style={{backgroundImage: `url(${src[count]})`}}>
        <div className="infoGalery__shadow"></div>
        <ArrowBack className="infoGalery__nav back" onClick={previousSlide}/>
        <ArrowForward className="infoGalery__nav forward" onClick={nextSlide} />
        <p className="infoGalery__nav number">{count+1}/{maxCount}</p>
    </section>
}


export default Slideshow;
import React from "react";

function Banner(props){
    // 
    
    return <div>
        <img src={props.home ? "home" : "apropos"} alt={props.home ? "home" : "apropos"} />
        {props.text && <p>Chez vous, partout et ailleurs</p>}
    </div>
}

export default Banner;
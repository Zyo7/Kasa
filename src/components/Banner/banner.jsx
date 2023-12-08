import React from "react";
//import about from "../../assets/banner_about.svg"
const home = "banner home";
const about = "banner about";

function Banner(props){
    
    return <div className={props.home ? home : about}>
        <div className="banner__opacity">
        </div>
        {props.text && <p className="banner__text">Chez vous, partout et ailleurs</p>}
    </div>
}

export default Banner;
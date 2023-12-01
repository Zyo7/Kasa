import React from "react";
import {ReactComponent as RedStar} from "../../assets/redStar.svg"
import {ReactComponent as GreyStar} from "../../assets/greyStar.svg"

function Identity(props){

    return <article className="infoLocation__identity">
        <div className="infoLocation__identity--info">
            <p className="infoLocation__identity--name">{props.identity.host["name"]}</p>
            <img className="infoLocation__identity--picture" src={props.identity.host["picture"]} alt="identité temporaire" />
        </div>
        <div className="infoLocation__identity--rating">
            {
                function (){
                    let rating = [];
                    for(let i = 0; i < 5; i++){
                        rating.push(i < props.identity.rating ? <RedStar/> : <GreyStar/>)
                    }
                    return rating;
                }()
            }
        </div>
    </article>
}

export default Identity;
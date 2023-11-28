import React from "react";

function Collapse(props){
    let contenu = "";

    if(Array.isArray(props.contenu)){
        contenu = props.contenu.map((e) => <p>{e}</p>);
    } else{
        contenu = <p>{props.contenu}</p>;
    }

    return <div>
        <h1>{props.titre}</h1>
        <div>{contenu}</div>
    </div>
}

export default Collapse;
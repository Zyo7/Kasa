import React from "react";

function Collapse(props){
    let contenu = "";

    if(Array.isArray(props.contenu)){
        contenu = props.contenu.map((e) => <p>{e}</p>);
    } else{
        contenu = <p>{props.contenu}</p>;
    }

    return <div className="collapseDiv">
        <h1 className="collapseDiv__title">{props.titre}</h1>
        <div className="collapseDiv__content">{contenu}</div>
    </div>
}

export default Collapse;
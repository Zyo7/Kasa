import React from "react";
import { ReactComponent as ButtonCollapse } from "../../assets/arrow_collapse.svg";


function Collapse(props){
    const contenu = (Array.isArray(props.contenu) ? props.contenu.map((e, i) => <p className="collapseDiv__content--text" key={i}>{e}</p>) : <p className="collapseDiv__content--text">{props.contenu}</p>);
    const nameCheck = "checks"+ props.id;

    return <div className="collapseDiv">
        <h1 className="collapseDiv__title">
            {props.titre} 
        </h1>
        <div className="collapseDiv__move">
            <input type="checkbox" className="invisible" id={nameCheck}></input>
            <label className="collapseDiv__move--arrow" htmlFor={nameCheck}>
                <ButtonCollapse />
            </label>
            <div className="collapseDiv__move--content">
                {contenu}
            </div>
        </div>
   
    </div>
}

export default Collapse;
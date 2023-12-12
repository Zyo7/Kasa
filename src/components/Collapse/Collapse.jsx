import React, {useState} from "react";
import { ReactComponent as ButtonCollapse } from "../../assets/arrow_collapse.svg";

function Collapse(props){
    const contenu = (Array.isArray(props.contenu) ? props.contenu.map((e, i) => <p className="collapseDiv__content--text" key={i}>{e}</p>) : <p className="collapseDiv__content--text">{props.contenu}</p>);
    const [classArrow, setClassArrow] = useState("collapseDiv__title--arrow up");
    const [classContent, setClassContent] = useState("collapseDiv__content in");
    const [showCollapse, setShowCollapse] = useState(false);
    
    function toggleCollapse() {
        setShowCollapse((o) => !o);
        if(showCollapse){
            setClassArrow("collapseDiv__title--arrow down");
            setClassContent("collapseDiv__content out");
        } else {
            setClassArrow("collapseDiv__title--arrow up");
            setClassContent("collapseDiv__content in");

        }
    }
    

    return <div className="collapseDiv">
        <h1 className="collapseDiv__title">{props.titre} <ButtonCollapse className={classArrow} onClick={toggleCollapse} /></h1>
        <div className={classContent}>
            {contenu}
        </div>     
    </div>
}

export default Collapse;
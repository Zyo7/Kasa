import React from "react";
import Slideshow from "../../components/Slideshow/slideshow";
import Localisation from "../../components/Localisation/localisation";
import Identite from "../../components/Identite/identite";
import Collapse from "../../components/Collapse/collapse";
import {useParams} from "react-router-dom";
import Exception from "../exception/exception";


function Propriete(props) {
    const {id} = useParams();
    const index = props.datas.findIndex(e => e.id === id);
    if(index >= 0) {
        const logement = props.datas[index];                
        return <div>
        <Slideshow slide={logement}/>
        <Localisation localisation={logement}/>
        <Identite identite={logement}/>
        <Collapse titre="Description" contenu={logement.description}/>
        <Collapse titre="Équipements" contenu={logement.equipments}/>
    </div>;
    }
    else {
        return <Exception/>;
    }
}

export default Propriete;
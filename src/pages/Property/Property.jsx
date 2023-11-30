import React from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Location from "../../components/Location/Location";
import Identity from "../../components/Identity/Identity";
import Collapse from "../../components/Collapse/Collapse";
import {useParams} from "react-router-dom";
import ErrorPage from "../Error/Error";


function Property(props) {
    const {id} = useParams();
    const index = props.datas.findIndex(e => e.id === id);
    if(index >= 0) {
        const logement = props.datas[index];                
        return <main>
            <Slideshow slide={logement}/>
            <Location location={logement}/>
            <Identity identity={logement}/>
            <Collapse titre="Description" contenu={logement.description}/>
            <Collapse titre="Équipements" contenu={logement.equipments}/>
        </main>;
    }
    else {
        return <ErrorPage/>;
    }
}

export default Property;
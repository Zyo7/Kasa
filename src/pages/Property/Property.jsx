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
        const info = [
            {
                titre: "Description",
                contenu: logement.description
            },
            {
                titre: "Équipements",
                contenu: logement.equipments
            }
        ]
        return <main className="propertyPage">
            <Slideshow slide={logement}/>
            <section className="infoLocation">
                <Location location={logement}/>
                <Identity identity={logement}/>
            </section>
            <section className="infoComplementaire">
                {info.map((e,i) => <Collapse titre={e.titre} contenu={e.contenu} key={i} id={i} />)}
            </section>
        </main>;
    }
    else {
        return <ErrorPage/>;
    }
}

export default Property;
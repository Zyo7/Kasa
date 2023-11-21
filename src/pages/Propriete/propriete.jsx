import React from "react";
import Slideshow from "../../components/Slideshow/slideshow";
import Localisation from "../../components/Localisation/localisation";
import Identite from "../../components/Identite/identite";
import Collapse from "../../components/Collapse/collapse";

const Propriete = () => (
    <div>
        <Slideshow />
        <Localisation />
        <Identite />
        <Collapse />
        <Collapse />
    </div>
);

export default Propriete;
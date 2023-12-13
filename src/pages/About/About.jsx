import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import abouts from "../../about.json"


function About(){
    const content = abouts.map((about, i) => 
    <Collapse key={i} titre={about.title} contenu={about.content} id={i} />);

    return <main className="aboutPage">
        <Banner />
        {content}
    </main>
}

export default About;
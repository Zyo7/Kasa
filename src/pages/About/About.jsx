import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import abouts from "../../about.json"

function About(){
    const content = abouts.map((about) => <Collapse titre={about.title} contenu={about.content} />);

    return <main className="aboutPage">
        <Banner />
        {content}
    </main>
}

export default About;
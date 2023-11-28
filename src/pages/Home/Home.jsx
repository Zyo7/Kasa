import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";



function Home(data) {
        return <div>
        <Banner home="true" text="true"/>
        {data.logements.map(logement =>(
            <Card preview={logement}/>
        ))}
    </div>
}

export default Home;
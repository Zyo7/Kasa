import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";



function Home(data) {
    return <main className="homePage">
        <Banner home="true" text="true"/>
        <section className="homePage__section">
            {data.logements.map((logement, i) =>(
                <Card preview={logement} key={i}/>
                ))}
        </section>
    </main>
}

export default Home;
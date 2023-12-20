import React from "react";
import Header from "../../components/Header/Header";
import ErrorPage from "../../pages/Error/Error";
import Footer from "../../components/Footer/Footer";

function Error (){
    return <>
    <div className="mainBody">
      <Header/>
      <ErrorPage/>
    </div>
      <Footer/>
    </>
}

export default Error;
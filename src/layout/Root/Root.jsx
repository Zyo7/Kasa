import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Root () {
    return <>
    <div className="mainBody">
      <Header />
      <Outlet />
    </div>
      <Footer />
    </>
}

export default Root;
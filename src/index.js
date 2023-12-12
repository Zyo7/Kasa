import React from "react";
//import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error"
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Property from "./pages/Property/Property";
import data from "./logements.json"

import "./sass/style.css";

function Root () {
  return <>
  <div className="mainBody">
    <Header />
    <Outlet />
  </div>
    <Footer />
  </>
}

function Error (){
  return <>
  <div className="mainBody">
    <Header/>
    <ErrorPage/>
  </div>
    <Footer/>
  </>
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home logements={data}/>
        
      },
      {
        path: 'about',
        element: <About />   
      },
      {
        path: "property",
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Property datas={null}/>
          },
          {
            path:':id',
            element: <Property datas={data}/>
          }
        ]        
      }
    ]
  }
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
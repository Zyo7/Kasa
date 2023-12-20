import React from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import Root from "./layout/Root/Root";
import Error from "./layout/Error/Error";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Property from "./pages/Property/Property";
import data from "./logements.json";

const Path = createBrowserRouter([
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

  export default Path;
import React from "react";
//import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/Home/Home";
import Exception from "./pages/exception/exception"
import Header from "./components/Header/header";
import Apropos from "./pages/Apropos/apropos";
import Footer from "./components/Footer/footer";
import Propriete from "./pages/Propriete/propriete";
import data from "./logements.json"

import "./sass/style.css";

function Root () {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

function Error (){
  return <>
    <Header/>
    <Exception/>
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
        path: 'a-propos',
        element: <Apropos />   
      },
      {
        path: "propriete",
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Propriete datas={null}/>
          },
          {
            path:':id',
            element: <Propriete datas={data}/>
          }
        ]        
      }
    ]
  }
]);

/*
function App(){
  return <RouterProvider router={router} />
}

class App extends React.Component {
    render() {
        return 
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Exception />} />
          </Routes>
        </BrowserRouter>
        
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
import React from "react";
//import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Exception from "./pages/exception/exception"
import Header from "./components/Header/header";
import Apropos from "./components/Apropos/apropos";
import Footer from "./components/Footer/footer";
import Propriete from "./pages/Propriete/propriete";
import data from "./logements.json"

import "./sass/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home logements={data}/>
        <Footer />
      </div>
    )
  },
  {
    path: "/a-propos",
    element: (
      <div>
        <Header />
        <Apropos />
        <Footer />
      </div>
    )
  },
  {
    path: "/propriete",
    element: (
      <div>
        <Header />
        <Propriete />
        <Footer />
      </div>
    )
  },
  {
    path: "/404",
    element: (
      <div>
        <Header />
        <Exception />
        <Footer />
      </div>
    )
  }
])
/*
function App(){
  return <RouterProvider router={router} />
}
*/
/*
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
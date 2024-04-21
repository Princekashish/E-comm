import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Stories from "./components/About/Stories";
import Everworldstories from "./components/Everworldstories/Everworldstories";
import Men from "./components/Landingpage/Men";
import Collection from "./components/Collections/Collection";
import Singup from "./components/Auth/Singup";
import Loginsign from "./components/Auth/Loginsign";
import  { Toaster } from 'react-hot-toast';
import ProductInfo from "./components/Collections/ProductInfo";
import ScrollTop from "./components/Scrolltop/ScrollTop";


const frame1Data = [
  { text: "Holiday Gifting", link: "/Holiday-Gifting" },
  { text: "New Arrivals", link: "/New-Arrivals" },
  { text: "Best-Sellers", link: "/Best-Sellers" },
  { text: "Clothing", link: "/Clothing" },
  { text: "Tops & Sweaters", link: "/Tops-and-Sweaters" },
  { text: "Pants & Jeans", link: "/Pants-and-Jeans" },
  { text: "Outerwear", link: "/Outerwear" },
  { text: "Shoes & Bags", link: "/Shoes-and-Bags" },
  { text: "Sale", link: "/Sale" },
];

const route = createBrowserRouter([
  { path: "/", Component: Men },
  { path: "/men", Component: Men },
  { path: "/about", Component: About },
  { path: "/about/stories", Component: Stories },
  { path: "/collections", Component: Collection },
  { path: "/everworld-stories",Component: Everworldstories},
  { path: "/Signup",Component: Singup},
  {path:"/login", Component:Loginsign},
  {path:"/productinfo/:id" , Component:ProductInfo}
]);

function App() {
  return (
    <>
      <div>
     
        <RouterProvider router={route} />
        <Toaster />
        
      </div>
   
    
    </>
  );
}

export default App;

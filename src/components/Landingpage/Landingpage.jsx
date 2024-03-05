import React from "react";
import Header from "./Header/Header";
import Section1 from "./Section1/Section1";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Women from "./Women/Women";
import About from "../About/About";

const route =createBrowserRouter ([
  {path:'/',Component:Header},
  {path:'/women',Component:Women},
  {path:'/about',Component:About}
])

function Landingpage() {
  return (
    <div>
   <RouterProvider router={route}/>
      
      {/* <Section1/> */}
    </div>
  );
}

export default Landingpage;

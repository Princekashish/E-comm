import React from "react";
import Header from "./Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Women from "./Women/Women";
import About from "../About/About";
import Everworldstories from "../Everworldstories/Everworldstories";

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
  { path: "/", element: <Header frame1={frame1Data} /> },
  { path: "/women", Component: Women },
  { path: "/about", Component: About },
  {
    path: "/everworld-stories",
    Component: Everworldstories,
  },
]);

function Landingpage() {
  return (
    <div>
      <RouterProvider router={route} />

      {/* <Section1/> */}
    </div>
  );
}

export default Landingpage;

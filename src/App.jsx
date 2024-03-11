import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Women from "./components/Landingpage/Men";
import About from "./components/About/About";
import Stories from "./components/About/Stories";
import Everworldstories from "./components/Everworldstories/Everworldstories";

import Router from "./components/Router/Router";
import Landingpage from "./components/Landingpage/Landingpage";
import Header from "./components/Header/Header";
import Men from "./components/Landingpage/Men";
import Collection from "./components/Collections/Collection";

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
  { path: "/", Component: Landingpage },
  { path: "/men", Component: Men },
  { path: "/about", Component: About },
  { path: "/about/stories", Component: Stories },
  { path: "/collections", Component: Collection },

  {
    path: "/everworld-stories",
    Component: Everworldstories,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={route} />
      </div>
    </>
  );
}

export default App;

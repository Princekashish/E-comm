import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Women from "./components/Landingpage/Women";
import About from "./components/About/About";
import Stories from "./components/About/Stories";
import Everworldstories from "./components/Everworldstories/Everworldstories";
import Blog from "./components/Everworldstories/Blog";
import Router from "./components/Router/Router";

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
  {
    path: "",
    Component: Router,
    children: [
      { path: "/", element: <Header frame1={frame1Data} /> },
      { path: "/women", Component: Women },
      { path: "/about", Component: About },
      { path: "/about/stories", Component: Stories },

      {
        path: "/everworld-stories",
        Component: Everworldstories,
      },
      {
        path: "/everworld-stories/blog-post",
        Component: Blog,
      },
    ],
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

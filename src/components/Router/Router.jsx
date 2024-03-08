import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Router() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Router;

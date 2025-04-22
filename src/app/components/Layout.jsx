// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

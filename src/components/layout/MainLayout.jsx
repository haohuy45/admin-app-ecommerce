import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <>
        <div className="app-container">
          <Sidebar />
          <div className="main-container">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
    </>
  );
};

export default MainLayout;

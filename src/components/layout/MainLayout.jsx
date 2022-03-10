import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <>
      {props.sidebar ? (
        <div className="app-container">
          <Sidebar />
          <div className="container">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <div className="app-container">
          <div className="container">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;

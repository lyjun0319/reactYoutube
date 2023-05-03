import React from 'react';
import Header from "./components/layout/header";
import {Outlet, useLocation} from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const mainPathCheck = location.pathname === "/";
  return (
    <div className="wrap" id={'wrap'}>
      <Header />
      <div className={mainPathCheck ? "container list" : "container"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
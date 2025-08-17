import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const LandingPageLayout = () => {


  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default LandingPageLayout;

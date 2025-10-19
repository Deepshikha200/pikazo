import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const Layout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = (isOpen) => {
    setIsNavbarOpen(isOpen);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <Header onNavbarToggle={toggleNavbar} />

      <main
        className={`outlet ${isNavbarOpen ? "" : ""}`}
        onClick={() => isNavbarOpen && toggleNavbar(false)}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

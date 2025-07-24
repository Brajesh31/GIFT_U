import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation(); // Get current page route

  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Hide footer on /cart page */}
      {location.pathname !== "/cart" && <Footer />}
    </>
  );
};

export default Layout;

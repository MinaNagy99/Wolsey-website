import React from "react";
import CustomNavbar from "./components/shared/CustomNavbar/CustomNavbar";
import Footer from "./components/shared/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

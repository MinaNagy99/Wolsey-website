import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";

function CustomNavbar() {
  const [visibleMobileNav, setVisibleMobileNav] = useState();
  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 800) {
          setVisibleMobileNav(true);
        } else {
          setVisibleMobileNav(false);
        }
      });
    }
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white">
      <div className="flex justify-around items-center  py-1 shadow-2xl">
        <Link to="/" className="lg:w-[12%] w-[20%]">
          <img className="" src="/images/logo.jpg" alt="Logo" />
        </Link>
        {visibleMobileNav ? (
          <>
            <MobileNav />
          </>
        ) : (
          <>
            <DesktopNav />
          </>
        )}
      </div>
    </div>
  );
}

export default CustomNavbar;

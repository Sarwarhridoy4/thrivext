import React from "react";
import { Navbar as NextraNavbar } from "nextra-theme-docs";

const Navbar = () => {
  return (
    <NextraNavbar
      logo={
        <div className="flex items-center  w-full justify-between relative">
          <span className="text-3xl font-bold">Thrivext</span>
        </div>
      }
      projectLink="https://github.com/Takib-Ahmed/thrivext"
    />
  );
};

export default Navbar;

import React from "react";
import { Navbar as NextraNavbar } from "nextra-theme-docs";
import Image from "next/image";

const Navbar = () => {
  return (
    <NextraNavbar
      logo={
        <div className="flex items-center  w-full justify-between relative">
      <div className=" flex  flex-row-reverse   items-center">
           <Image height={100}  width={100} className=" w-10  hidden  md:w-12 " src='/ChatGPT Image Jun 15, 2025, 04_14_04 PM (1).png' alt="logo"/> <span className="text-3xl font-bold">thrivext</span>
      </div>
        </div>
      }
      projectLink="https://github.com/Takib-Ahmed/thrivext"
    />
  );
};

export default Navbar;

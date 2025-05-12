import React from "react";
import { Footer as NextraFooter } from "nextra-theme-docs";

const Footer = () => {
  return (
    <div className="nx-text-gray-500">
      <NextraFooter>
        <h1 className="nx-text-center">
          copyright {new Date().getFullYear()} &#169; thrivext.
        </h1>
      </NextraFooter>
    </div>
  );
};

export default Footer;

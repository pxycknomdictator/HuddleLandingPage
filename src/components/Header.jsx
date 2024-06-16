import React from "react";
import logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-[89%] mx-auto pt-12">
      <a href="#" className="w-44">
        <img className="w-full" src={logo} alt="logo.svg" />
      </a>
      <div>
        <button className="borderColor rounded-full px-5 py-1 text-Pink cursor-pointer">
          Try it Free
        </button>
      </div>
    </header>
  );
};

export default Header;

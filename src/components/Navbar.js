import React from "react";
import logo from "../resources/logo2.svg";

const Navbar = (props) => {
  return (
    <nav className="container relative p-6 mx-auto">
      <div className="flex items-center justify-between md:space-x-6 ">
        <div className="">
          <img src={logo} className="w-1/3" alt="logo" />
        </div>
        <div className="hidden space-x-6 md:flex">
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Community
          </a>
        </div>
        <div className="hidden md:block">
          <button className="rounded-full bg-[#5A5A5A] text-[#FFFFFF] lg:p-1 lg:px-2 md:px-2 md:text-sm hover:bg-red-500">
            Get Started
          </button>
        </div>

        <button
          id="menu-btn"
          className="hamburger block md:hidden focus:outline-none"
          onClick={props.hamburger}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          className="absolute items-center self-end flex-col py-8 mt-10 hidden space-y-6 font-bold bg-white sm:self-center sm:w-auto left-6 right-6 drop-shadow-md"
          id="menu"
        >
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

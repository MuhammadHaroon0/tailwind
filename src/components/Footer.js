import React from "react";
import logo from "../resources/logo2.svg";

const Footer = () => {
  return (
    <section>
<div className="container flex flex-col-reverse md:flex-row justify-between mx-auto items-center p-6 my-0 space-y-2 bg-black">
      <div className="flex flex-col-reverse md:flex-col justify-center items-center md:space-y-12 p-4 md:w-1/5">
        <img src={logo} className="hidden md:block md:w-1/3" alt="logo" />
        <div className="flex flex-row justify-center items-center space-x-2">
          <i
            class="fa-brands fa-facebook fa-lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          ></i>
          <i
            class="fa-brands fa-instagram fa-lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          ></i>
          <i
            class="fa-brands fa-linkedin fa-lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          ></i>
          <i
            class="fa-brands fa-twitter fa-lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          ></i>
          <i
            class="fa-brands fa-whatsapp fa-lg"
            style={{ color: "#ffffff", cursor: "pointer" }}
          ></i>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center md:space-x-12 md:w-2/5">
        <div className="flex flex-col justify-center items-center md:space-y-3 p-4 md:w-1/2">
          <a href="" className="text-white">
            Home
          </a>
          <a href="" className="text-white">
            Pricing
          </a>
          <a href="" className="text-white">
            Products
          </a>
          <a href="" className="text-white">
            About us
          </a>
        </div>
        <div className="flex flex-col justify-center items-center md:space-y-3 p-4 md:w-1/2">
          <a href="" className="text-white">
            Careers
          </a>
          <a href="" className="text-white">
            Community
          </a>
          <a href="" className="text-white">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="flex flex-col w-2/5 justify-center items-center pt-3 space-y-8" >
      <form action="" className="flex flex-row space-x-2">
        <input
          type="text"
          placeholder="Updates in your inbox"
          className="rounded-full focus:outline-none focus:shadow-outline focus:border-blue-300 p-1 pl-2"
        />
        <button className="rounded-full bg-white p-1 px-2 hover:bg-[#5A5A5A]">
          GO
        </button>
      </form>
    
      
        <small className="hidden self-end justify-self-end md:block text-white">
          Copyright 2023. All rights reserved.
        </small>
    </div>
    </div>
    </section>
    
  );
};

export default Footer;

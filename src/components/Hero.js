import React from "react";
import side from "../resources/side.svg";
const Hero = () => {
  return (
    <div>
      <section className="my-3">
        <div className="flex flex-col-reverse md:flex-row p-6 mx-auto content-center justify-center">
          <div className="flex flex-col content-center justify-center p-6 md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="font-bold text-4xl">
              Specializing in creating stunning and functional websites tailored
              to meet your unique needs.{" "}
            </h3>
            <p>
              Our team of skilled web developers combines creativity with
              technical proficiency to deliver exceptional websites that
              captivate your audience and drive results. We understand that your
              website is a powerful tool for establishing your brand identity,
              reaching your target audience
            </p>
            <div className="">
              <button className="rounded-full justify-center items-center bg-[#5A5A5A] text-[#FFFFFF] md:p-1 md:px-2 px-2 p-2 hover:bg-red-500">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col content-center justify-center p-6 md:w-1/2">
            <img src={side} alt="" />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Hero;

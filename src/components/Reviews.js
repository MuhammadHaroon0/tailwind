import React from "react";
import one from '../resources/1.jpg';
import two from '../resources/2.jpg';
import three from '../resources/3.jpg';

const Reviews = () => {
  return (
      <div className="container flex flex-col content-center justify-center p-4 mx-auto my-6 space-y-6">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-14">What they've said</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:space-y-0 space-y-10 md:space-x-6">

            <div className="flex flex-col text-center items-center justify-center p-4 bg-[#e0e0e0] space-y-4 md:w-1/3">
            <img src={two} className="rounded-full -mt-10 h-12 w-12" alt="one" />
              <h1 className="font-bold">Anisha Li</h1>
              <p>
              Amazing and fast services by the seller. He did this outstanding job. All the ideas used are very creative and according to my requirements.
                </p>
            </div>
          

        {/*  */}

        <div className="flex flex-col text-center items-center justify-center p-4 bg-[#e0e0e0] space-y-4 md:w-1/3">
            <img src={three} className="rounded-full -mt-10 h-12 w-12" alt="one" />
              <h1 className="font-bold">Ali Bravo</h1>
              <p>
              Excellent end product. I love the logo and label designed by him. He is so nice and humble and gave me unlimited revisions. 
                </p>
            </div>
          


        {/*  */}

        <div className="hidden md:flex flex-col text-center items-center justify-center p-4 bg-[#e0e0e0] space-y-4 md:w-1/3">
            <img src={one} className="rounded-full -mt-10 h-12 w-12" alt="one" />
              <h1 className="font-bold">Theo</h1>
              <p>
              Thanks for the great services. I like the way you deal with your
              clients and revisions given to me were splendid and on timely
              manner. Keep it up
                </p>
            </div>
          
      </div>
      </div>

  );
};

export default Reviews;

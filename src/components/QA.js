import React from "react";

const QA = () => {
  return (
    <div>
      <section className="my-4">
        <div className="flex flex-col-reverse content-center justify-center p-6 mx-auto md:flex-row space-x-6">
          <div className="flex flex-col text-center md:text-left md:w-1/2 space-y-6 p-6">
            <h1 className="font-bold text-4xl">What's different about us?</h1>
            <p>
              We can create visually appealing and user-friendly websites that
              are both functional and aesthetically pleasing.
            </p>
          </div>
          <div className="flex flex-col justify-start content-center space-y-4 md:w-1/2">
          <div className="flex flex-row rounded-full">
              <div className="rounded-full p-2 px-5 text-center h-10 justify-center bg-red-500 text-white">
                1
              </div>
              <div className="flex flex-col md:w-2/3 ">

              <div className="space-y-3 p-2">
                <div>

                Social Media Integration
                </div>
                <div>
                    
              <p>
              Links to the developer's or agency's social media profiles, enabling visitors to connect and follow their updates.
              </p>
                </div>
              </div>
            </div>
              </div>


            <div className="flex flex-row rounded-full">
              <div className="rounded-full p-2 px-5 text-center h-10 justify-center bg-red-500 text-white">
                2
              </div>
              <div className="flex flex-col md:w-2/3">

              <div className="space-y-3 p-2">
                <div>

              Responsive Design
                </div>
                <div>
                    
              <p>
              Ensuring the website is responsive and mobile-friendly, allowing it to adapt and display properly on various devices and screen sizes.
              </p>
                </div>
              </div>
            </div>
              </div>


              <div className="flex flex-row rounded-full">
              <div className="rounded-full p-2 px-5 text-center h-10 justify-center bg-red-500 text-white">
                3
              </div>
              <div className="flex flex-col md:w-2/3">

              <div className="space-y-3 p-2">
                <div>

              Client Projects/Case Studies
                </div>
                <div>
                    
              <p>
              Highlighting specific client projects or case studies to showcase successful collaborations and demonstrate the developer's problem-solving skills and outcomes.
              </p>
                </div>
              </div>
            </div>
              </div>
          </div>

          

          
        </div>
      </section>
    </div>
  );
};

export default QA;

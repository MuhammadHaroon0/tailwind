import React from 'react'

const Down = () => {
  return (
    <div className="md:max-h-44 container flex flex-col md:flex-row mx-auto p-6 px-10 mt-4 mb-0 justify-between items-center bg-red-500">
        <div className="md:w-1/2 flex p-12 text-center justify-center text-4xl font-bold text-white" >
           <h2>Simplifying your content today.
            </h2> 
            </div>
            <div className="md:w-1/2 flex justify-center items-center" >
              <button className="rounded-full bg-white p-1 px-2 hover:bg-[#5A5A5A]">
                Get Started
              </button>

            </div>
    </div>
  )
}

export default Down

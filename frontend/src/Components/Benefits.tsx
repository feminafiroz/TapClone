import React from 'react';
import girl from '../assets/images/pic.png'
import girll from '../assets/images/picture.png'


function Benefits() {
  return (
    <div className="bg-gradient-to-br bg-bgCourse min-h-screen flex justify-center items-center pt-8 p-2 pb-0 pl-0">
      {/* Outer Glow Effect */}
      <div className="relative">
        {/* Gradient Glow */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent  opacity-30 blur-lg"></div> */}
        
        {/* Content */}
          {/* Heading */}
          <div className="col-span-2 text-left mb-8 pl-8">
            <h1 className="text-6xl font-normal text-white"><span className="text-emerald-400 ">Learner </span> Benefits</h1>
          </div>

          
<div className="w-full h-[400px] object-cover bg-gray-200 flex justify-center items-center overflow-hidden md:hidden">
  <img src={girll} alt="" className="w-full h-full object-cover" />
</div>

{/* Image for Larger Screens */}
<div className="w-full h-[700px] bg-gray-200 flex justify-center items-center overflow-hidden hidden md:flex">
  <img src={girl} alt="" className="w-full h-full object-cover" />
</div>


        </div>
      </div>
    // </div>
  );
}

export default Benefits;

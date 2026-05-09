import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between max-w-[1500px] mx-auto gap-10 mt-10">
        <div className="card  h-[250px] w-1/2 items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <h4 className="mt-[100px] text-white text-2xl">In-Progress</h4>
          <span className="text-white text-2xl">0</span>
        </div>
        <div className="card  h-[250px] w-1/2 items-center bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          <h4 className="mt-[100px] text-white text-2xl">Resolved</h4>
          <span className="text-white text-2xl">0</span>
        </div>
      </div>
    </div>
  );
};
React;
export default Hero;

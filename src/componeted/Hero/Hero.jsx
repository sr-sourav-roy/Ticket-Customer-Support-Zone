import React from "react";

const Hero = ({ inProgress, inResolved }) => {
  return (
    <div>
      <div className="p-1.5 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1500px] mx-auto mt-10">
        <div className="card  h-[250px] w-full items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <h4 className="mt-[100px] text-white text-2xl">In-Progress</h4>
          <span className="text-white text-2xl">{inProgress}</span>
        </div>
        <div className="card  h-[250px] w-full items-center bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          <h4 className="mt-[100px] text-white text-2xl">Resolved</h4>
          <span className="text-white text-2xl">{inResolved}</span>
        </div>
      </div>
    </div>
  );
};
React;
export default Hero;

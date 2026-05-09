import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar  max-w-[1500px] mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost md:text-xl lg:text-3xl font-bold">
              CS — Ticket System
            </a>
          </div>
          <div className="flex gap-3.5 items-center">
            <div className="flex gap-6">
              <button className=" hover:bg-gray-300 p-3 rounded-xl">
                Home
              </button>
              <button className=" hover:bg-gray-300 p-3 rounded-xl">FAQ</button>
              <button className=" hover:bg-gray-300 p-3 rounded-xl">
                Changelog
              </button>
              <button className=" hover:bg-gray-300 p-3 rounded-xl">
                Blog
              </button>
              <button className=" hover:bg-gray-300 p-3 rounded-xl">
                Download
              </button>
              <button className=" hover:bg-gray-300 p-3 rounded-xl">
                Contact
              </button>
            </div>
            <div className="btn bg-[#752AD5] text-[#FFFFFF] text-xl p-5">
              {" "}
              <span className="">+</span>
              <span>New Ticket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
React;
export default Navbar;

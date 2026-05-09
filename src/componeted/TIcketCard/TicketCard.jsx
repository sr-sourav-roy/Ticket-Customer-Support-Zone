import React from "react";

const TicketCard = ({ tickets }) => {
  console.log(tickets);
  return (
    <div>
      <div className="max-w-[1500px] mx-[auto] flex justify-between mt-10">
        {/* card container-1*/}
        <div>
          <h2 className="text-2xl font-medium">Customer Tickets</h2>
          <div>
            <div className="card w-96 bg-base-500 card-xs shadow-xl">
              <div className="card-body mt-3.5">
                <div className="flex justify-between">
                  <h2 className="card-title">
                    Login Issues - Can't Access Account
                  </h2>
                  <button className="border-0 rounded-2xl p-3.5 pt-0 pb-0 bg-[#B9F8CF]">
                    open
                  </button>
                </div>
                <p className="font-sans">
                  Customer is unable to log in to their account. They've tried
                  resetting their password multiple times but still...
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2.5">
                    <p>#1001</p>
                    <p className="text-red-400">HIGH PRIORITY</p>
                  </div>
                  <div className="flex gap-2.5">
                    <p>John Smith</p>
                    <p>1/15/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card container-2*/}
        {/* <div className="w-1/4">
          <div>
            <h2 className="text-2xl font-medium mb-3">Task Status</h2>
            <span>Select a ticket to add to Task Status</span>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb">Resolved Task</h2>
            <span>No resolved tasks yet.</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

React;
export default TicketCard;

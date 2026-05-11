import React from "react";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div onClick={() => onClick(ticket)} className="grid grid-cols-2-2 w-10/12">
      <div className="card bg-base-500 shadow-xl">
        <div className="card-body mt-3.5">
          <div className="flex justify-between">
            <h2 className="font-semibold">{ticket.title}</h2>
            <button className="border-0 rounded-2xl p-3.5 pt-0 pb-0 bg-[#B9F8CF]">
              {ticket.status}
            </button>
          </div>
          <p className="">{ticket.description}</p>
          <div className="flex justify-between">
            <div className="flex gap-2.5">
              <p>{ticket.id}</p>
              <p className="text-red-400">{ticket.priority}</p>
            </div>
            <div className="flex gap-2.5">
              <p>{ticket.customer}</p>
              <p>{ticket.createdAt || ticket.data}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

React;
export default TicketCard;

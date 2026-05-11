import React, { use } from "react";
import TicketCard from "../TIcketCard/TicketCard";
import Tasks from "../Tasks/Tasks";

const Card = ({
  ticketPromise,
  onTicketClick,
  onComplete,
  inProgressTickets,
  inResolvedTickets,
}) => {
  // json data ticketPromise converted
  const ticketData = use(ticketPromise);
  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* ===== CUSTOMER TICKETS SECTION ===== */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>

          {/* এখানে এক লাইনেই সুন্দর Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {ticketData.map((ticket, index) => (
              <TicketCard key={index} ticket={ticket} onClick={onTicketClick} />
            ))}
          </div>
        </div>

        {/* ===== TASK STATUS SECTION ===== */}
        <div className="lg:col-span-4 sticky top-6 ">
          <Tasks
            onComplete={onComplete}
            inProgress={inProgressTickets}
            resolved={inResolvedTickets}
          ></Tasks>
        </div>
      </div>
    </div>
  );
};

React;
export default Card;

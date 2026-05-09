import React, { use } from "react";
import TicketCard from "../TIcketCard/TicketCard";

const Card = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ===== CUSTOMER TICKETS SECTION ===== */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>

          {/* এখানে এক লাইনেই সুন্দর Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {ticketData.map((ticket, index) => (
              <TicketCard key={index} ticket={ticket} />
            ))}
          </div>
        </div>

        {/* ===== TASK STATUS SECTION ===== */}
        <div className="lg:col-span-4">
          <div className="sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Task Status</h2>

            <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-base-300">
              <p className="text-sm text-gray-500 mb-4">
                Select a ticket to add to Task Status
              </p>

              <div className="bg-base-200 rounded-xl p-6 text-center">
                <h3 className="font-semibold mb-2">Resolved Task</h3>
                <p className="text-gray-500">No resolved tasks yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

React;
export default Card;

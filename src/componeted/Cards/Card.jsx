import React, { use } from "react";
import TicketCard from "../TIcketCard/TicketCard";

const Card = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);
  console.log(ticketData);
  return (
    <div>
      {ticketData.map((tickets) => (
        <TicketCard tickets={tickets}></TicketCard>
      ))}
    </div>
  );
};

React;
export default Card;

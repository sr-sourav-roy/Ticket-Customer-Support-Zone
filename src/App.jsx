import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Hero from "./componeted/Hero/Hero";
import Navbar from "./componeted/Navbar/Navbar";
import Card from "./componeted/Cards/Card";
import Footer from "./componeted/Footer/Footer";

const fetchTicket = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};
const ticketPromise = fetchTicket();
function App() {
  // main sate:------------>
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length;

  // Ticket ক্লিক করলে In-Progress এ যাবে
  const handleTicketClick = (ticket) => {
    if (inProgress.some((t) => t.id === ticket.id)) {
      toast.info("already in progress");
      return;
    }
    setInProgress((prev) => [...prev, ticket]);
    toast.success(`Ticket #${ticket.id} moved to In-Progress`, {
      position: "top-right",
    });
  };

  // Complete বাটনে ক্লিক করলে
  const handleComplete = (ticket) => {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));

    setResolved((prev) => [...prev, ticket]);
    toast.success(`🎉 Ticket #${ticket.id} Resolved Successfully`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* hero sections: */}
      <Hero inProgress={inProgressCount} inResolved={resolvedCount}></Hero>

      {/* card section */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Card
          ticketPromise={ticketPromise}
          onTicketClick={handleTicketClick}
          onComplete={handleComplete}
          inProgressTickets={inProgress}
          inResolvedTickets={resolved}
        ></Card>
      </Suspense>

      {/* footer section */}
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;

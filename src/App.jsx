import { Suspense } from "react";
import "./App.css";
import Hero from "./componeted/Hero/Hero";
import Navbar from "./componeted/Navbar/Navbar";
import Card from "./componeted/Cards/Card";
import Footer from "./componeted/Footer/Footer";

const fetchTicket = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const ticketPromise = fetchTicket();
  // console.log(ticketPromise);
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* hero sections: */}
      <Hero></Hero>

      {/* card section */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Card ticketPromise={ticketPromise}></Card>
      </Suspense>

      {/* footer section */}
      <Footer></Footer>
    </>
  );
}

export default App;

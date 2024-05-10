"use client";

import Header from "../components/header";
import Navbar from "../components/navbar";
import CardsContainer from "../components/main-products-body/CardsContainer";

export default function page() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-col gap-4 ">
        <Navbar />
        <Header />
        <CardsContainer />
      </div>
    </main>
  );
}

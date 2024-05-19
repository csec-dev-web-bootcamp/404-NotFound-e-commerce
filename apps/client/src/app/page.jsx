"use client";
import Navbar from "../components/navbar";
import Header from "../components/header";
import CardsContainer from "../components/main-products-body/CardsContainer";
import ProductsCategory from "../components/main-products-body/ProductsCategory";

export default function page() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-col gap-4 ">
        <Navbar />
        <Header />
        <CardsContainer />
        {/* <ProductsCategory /> */}
      </div>
    </main>
  );
}

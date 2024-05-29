import Navbar from "../components/navbar";
import Header from "../components/header";
import CardsContainer from "../components/main-products-body/CardsContainer";
import ProductsCategory from "../components/main-products-body/ProductsCategory";
import { getManyProducts } from "../data/products";

export default async function page({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const data = await getManyProducts(params.toString());
  return (
    <main className="w-full mx-auto">
      <div className="w-full flex flex-col gap-24 ">
        <Header activeItem={searchParams.category} />
        {data.error ? <div></div> : <CardsContainer products={data} />}
      </div>
    </main>
  );
}

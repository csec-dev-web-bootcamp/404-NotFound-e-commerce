import Navbar from "../components/navbar";
import Header from "../components/header";
import CardsContainer from "../components/main-products-body/CardsContainer";
import ProductsCategory from "../components/main-products-body/ProductsCategory";
import { getManyProducts } from "../data/products";
import { cookies } from "next/headers";

export default async function page({ searchParams }) {
  const cookieStore = cookies();
  const role = cookieStore.get("userRole")?.value;
  console.log("role");
  console.log(role);
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

import Navbar from "../components/navbar";
import Header from "../components/header";
import CardsContainer from "../components/main-products-body/CardsContainer";
import ProductsCategory from "../components/main-products-body/ProductsCategory";
import { getManyProducts } from "../data/products";

export default async function page() {
  const data = await getManyProducts()
  return (
    <main className="w-full mx-auto">
      <div className="w-full flex flex-col gap-4 ">
        <Navbar />
        <Header />
        {data.error ? <div></div>:(
        <CardsContainer products={data} />
        )}
        {/* <ProductsCategory /> */}
      </div>
    </main>
  );
}

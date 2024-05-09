import Header from "../components/header";
import Navbar from "../components/navbar";
import Card from "../components/cards-main/Card";

export default function Page() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-col gap-4 ">
       
       <Navbar />
       {/* <NavigationMenuDemo /> */}
       <Header />
       <Card />
      </div>
    </main>
  );
}

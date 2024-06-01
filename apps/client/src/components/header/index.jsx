import { CATEGORIES, formatCategory } from "@app/client/lib/formatCategory";
import Link from "next/link";
import SearchInput from "./SearchInput";

const Header = ({ activeItem }) => {
  return (
    <header
      className="relative min-h-[60vh] w-full flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="rounded-md border border-slate-500 w-11/12 shadow-xl bg-white bg-opacity-50 p-8 backdrop-blur-lg dark:bg-slate-700 dark:bg-opacity-80 dark:text-white">
        <div className="writer flex h-full flex-col  gap-8 items-center text-center">
          {/* <h1 className="text-5xl font-bold mb-6">
            Explore with X-those E-commerce Website */}



<div className="containerr">
  <p>Experience with</p>
  <section className="animation">
    <div className="first"><div>E-commerce Website</div></div>
    <div className="second"><div>Shopping platform</div></div>
    <div className="third"><div>Safe and Cool</div></div>
  </section>
</div>
{/* <h1>
  <span>Experience with </span>
  <div class="message">
    <div class="word1">E-commerce Website</div>
    <div class="word2">Shopping platform</div>
    <div class="word3">Safe and Cool</div>
  </div>
</h1> */}


          {/* </h1> */}
          <div className="w-full max-w-2xl mb-6">
            <SearchInput />
          </div>
          <div className="categories">
            <ul className="flex flex-wrap justify-center gap-4">
              {CATEGORIES.map((category, index) => (
                <Link
                  key={index}
                  href={`?category=${formatCategory(category)}`}
                  className={`px-4 py-2 transition duration-300 ease-in-out border-2 rounded-sm ${
                    formatCategory(activeItem) === formatCategory(category)
                      ? "bg-slate-900 text-white"
                      : "border-slate-700 text-slate-900 hover:bg-slate-800 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-800"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

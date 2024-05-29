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
      <div className="rounded-md border border-slate-300 w-11/12 shadow-xl bg-white bg-opacity-80 p-8 backdrop-blur-md dark:bg-slate-700 dark:bg-opacity-80 dark:text-white">
        <div className="flex h-full flex-col justify-evenly items-center text-center">
          <h1 className="text-5xl font-bold mb-6">
            Explore with X-those E-commerce Website
          </h1>
          <div className="w-full max-w-md mb-6">
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
                      ? "bg-slate-800 text-white"
                      : "border-slate-700 text-slate-700 hover:bg-slate-800 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-800"
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

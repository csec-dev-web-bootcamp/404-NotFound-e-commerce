"use client";

import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import React from "react";
import { useCart } from "@app/client/store/cart-store";
import ModeToggle from "../ui/ModeToggle";

const page = () => {
  const cart = useCart();
  return (
    <main className="w-full px-12 py-2 shadow-2xl flex justify-between dark:bg-slate-700 dark:text-white">
      <div className="flex items-center gap-10">
        <div className="">Nav2</div>
        <div className="">Nav3</div>
      </div>

      <div className="flex items-center gap-10">
        <ModeToggle />
        <div className="">
          <FaRegUser />
        </div>
        <div className="relative">
          <FaCartArrowDown />
          {!!cart.cartProducts.length && (
            <span className="absolute top-0  right-0 translate-x-2/3 -translate-y-1/2 rounded-full bg-red-600 text-white text-sm flex justify-center items-center  h-[1.2rem] min-w-[1.2rem] px-1">
              {cart.cartProducts.length}
            </span>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;

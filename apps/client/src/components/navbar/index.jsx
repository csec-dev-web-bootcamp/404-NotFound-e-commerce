"use client";

import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import React from "react";
import { useCart } from "@app/client/store/cart-store";
import ModeToggle from "../ui/ModeToggle";
import Cart from "../global/cart";
import WishList from "../global/wish-list";

const page = () => {
  const cart = useCart();
  return (
    <main className="w-full px-12 py-2 shadow-2xl flex justify-between dark:bg-slate-700 dark:text-white">
      <div className="flex items-center gap-10">
        <div className="font-bold text-2xl">X-those.</div>
        <div className="">Features</div>
        <div className="">Ads.</div>
      </div>

      <div className="flex items-center gap-7">
        <ModeToggle />
        <div className="">
          <FaRegUser />
        </div>
        <Cart />
        <WishList />
      </div>
    </main>
  );
};

export default page;
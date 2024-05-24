"use client";

import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import React from "react";
import { useCart } from "@app/client/store/cart-store";
import ModeToggle from "../ui/ModeToggle";
import Cart from "../global/cart";
import WishList from "../global/wish-list";
import Link from "next/link";

const page = () => {
  const cart = useCart();
  return (
    <main className="mb-6 right-0 left-0 w-full px-12 py-2 shadow-2xl flex justify-between dark:bg-slate-700 dark:text-white">
      <div className="flex items-center gap-6">
        <div className="font-extrabold font-mono text-2xl space-x-2">X-those.</div>
        <Link href="/" className="">Features</Link>
        <Link href="/" className="">Quality products</Link>
        <Link href="/" className="">Ads.</Link>
      </div>

      <div className="flex items-center gap-7">
        <ModeToggle />
        <Link
          href={"/auth"}
          className="">
          <FaRegUser />
        </Link>
        <Cart />
        <WishList />
      </div>
    </main>
  );
};

export default page;

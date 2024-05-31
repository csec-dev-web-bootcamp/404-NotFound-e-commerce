"use client";

import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import React from "react";
import { useCart } from "@app/client/store/cart-store";
import ModeToggle from "../ui/ModeToggle";
import Cart from "../global/cart";
import WishList from "../global/wish-list";
import Link from "next/link";
import Profile from "@app/client/components/profile";

const page = () => {
  const cart = useCart();
  return (
    <main className="mb-6 right-0 left-0 w-full rounded px-12 py-4 shadow-2xl flex justify-between dark:bg-slate-700 dark:text-white">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-extrabold font-serif text-3xl space-x-2">
          X-those.
        </Link>
      </div>

      <div className="flex items-center gap-7">
        <ModeToggle />
        <Profile />

        <Cart />
        <WishList />
      </div>
    </main>
  );
};

export default page;

"use client";

import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import React from "react";
import { useCart } from "@app/client/store/cart-store";
import ModeToggle from "../ui/ModeToggle";
import Cart from "../global/cart";
import WishList from "../global/wish-list";
import Link from "next/link";
import Profile from "@app/client/components/profile";
import Image from "next/image";
import logo from "./logo.png"

const page = () => {
  const cart = useCart();
  return (
    <main className="mb-20 right-0 left-0 w-full rounded px-12 py-4 shadow-2xl flex justify-between dark:bg-slate-700 dark:text-white">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-normal font-sans text-3xl space-x-2 flex gap-1 items-center justify-center">
          <Image width={80} height={3} src={logo} alt="logo" />
          X-those.
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <ModeToggle />

        <Cart />
        <WishList />
        <Profile />
      </div>
    </main>
  );
};

export default page;

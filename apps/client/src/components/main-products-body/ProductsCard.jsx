"use client"

import { useCart } from "@app/client/store/cart-store";
import { LucideHeart } from "lucide-react";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { FaCartPlus } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function ProductsCard({ product }) {
  const cart = useCart();
  const isAdded = useMemo(() => {
    return cart.cartProducts.find((prod) => prod.id === product.id);
  }, [cart.cartProducts]);

  return (
    <div className="p-2 rounded-sm border-[1px] border-slate-300 shadow-md">
      <div className="h-[220px]">
        <img
          src={product.image}
          alt={`${product.title} imgsss`}
          className="h-full w-full rounded-sm "
        />
      </div>
      <div className="text-left mt-4 flex flex-col">
        <h4 className="text-lg text-gray-800 pl-2 truncate">{product.title}</h4>
        <div className="flex justify-between products-center mt-3">
          <h4 className="text-2xl text-gray-800 pl-2 font-bold ">
            ${product.price}{" "}
            <strike className="text-gray-400 ml-0.5 font-semibold text-base">
              $15
            </strike>
          </h4>
          <button className="p-1 m-2 rounded-full hover:bg-emerald-100">
            <LucideHeart />
          </button>
        </div>
        <Button
          variant="cartBtn"
          className="gap-3"
          onClick={() =>
            isAdded ? cart.removeFromCart(product.id) : cart.addToCart(product)
          }>
          {isAdded ?  <MdRemoveShoppingCart size={24} /> : <FaCartPlus size={24} />}
          {isAdded ? `remove from cart` : `add to cart`}
        </Button>
      </div>
    </div>
  );
}

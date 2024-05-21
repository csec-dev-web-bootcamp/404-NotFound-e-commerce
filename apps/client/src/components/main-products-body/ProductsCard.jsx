"use client";

import { useCart } from "@app/client/store/cart-store";
import { LucideHeart } from "lucide-react";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { FaCartPlus } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useWishlist } from "@app/client/store/wishlist";
import { LucideHeartCrack } from "lucide-react";
import { LucideHeartOff } from "lucide-react";

export default function ProductsCard({ product }) {
  const cart = useCart();
  const wishlist = useWishlist();
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const isAddedToCart = useMemo(() => {
    return cart.cartProducts.find((prod) => prod.id === product.id);
  }, [cart.cartProducts]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const isAddedToWishlist = useMemo(() => {
    return wishlist.wishlistProducts.find((prod) => prod.id === product.id);
  }, [wishlist.wishlistProducts]);

  return (
    <div className="p-2 rounded-sm border-[1px] border-slate-300 dark:border-slate-700 shadow-md">
      <div className="h-[220px]">
        <img
          src={product.image}
          alt={`${product.title} imgsss`}
          className="h-full w-full rounded-sm "
        />
      </div>
      <div className="text-left mt-4 flex flex-col">
        <h4 className="text-lg  pl-2 truncate">{product.title}</h4>
        <div className="flex justify-between products-center mt-3">
          <h4 className="text-2xl  pl-2 font-bold ">
            ${product.price}{" "}
            <strike className="text-gray-400 ml-0.5 font-semibold text-base">
              $15
            </strike>
          </h4>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="p-1 m-2 rounded-full hover:bg-emerald-100 dark:bg-slate-500"
            onClick={() =>
              isAddedToWishlist
                ? wishlist.removeFromWishlist(product.id)
                : wishlist.addToWishlist(product)
            }
          >
            {isAddedToWishlist ? <LucideHeartOff /> : <LucideHeart />}
          </button>
        </div>
        <Button
          variant="cartBtn"
          className="gap-3"
          onClick={() =>
            isAddedToCart
              ? cart.removeFromCart(product.id)
              : cart.addToCart(product)
          }
        >
          {isAddedToCart ? (
            <MdRemoveShoppingCart size={24} />
          ) : (
            <FaCartPlus size={24} />
          )}
          {isAddedToCart ? "remove from cart" : "add to cart"}
        </Button>
      </div>
    </div>
  );
}

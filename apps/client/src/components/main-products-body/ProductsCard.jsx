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
import Link from "next/link";

export default function ProductsCard({ product }) {
  console.log(product);
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
        <Link href={`/products/${product.id}`}>
          <img
            src={product.imgUrl}
            alt={`${product.title} imgsss`}
            className="h-full w-full rounded-sm "
          />
        </Link>
      </div>
      <div className="text-left mt-4 flex flex-col">
        <h4 className="text- pl-2 truncate">{product.name}</h4>
        <div className="flex justify-between products-center mt-3">
          <h4 className="text-3xl  pl-2 font-bold ">
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
          className={`${isAddedToCart && 'bg-white text-black'}gap-3`}
          onClick={() =>
            isAddedToCart
              ? cart.removeFromCart(product.id)
              : cart.addToCart(product)
          }
        >
          {isAddedToCart ? (
            <MdRemoveShoppingCart size={23} />
          ) : (
            <FaCartPlus size={23} />
          )}
          {isAddedToCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
}

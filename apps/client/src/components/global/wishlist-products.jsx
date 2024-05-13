"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";
import { useCart } from "@app/client/store/cart-store";
import { Button } from "../ui/button";
import { Delete } from "lucide-react";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { useWishlist } from "@app/client/store/wishlist";

export default function WishlistProduct({ product }) {
  const wishlist = useWishlist();

  return (
    <Card className="my-4 border-slate-500 shadow-xl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="">{product.title}</CardTitle>
          <Button
            variant="cartBtn"
            size="smicon"
            rounded="full"
            onClick={() => wishlist.removeFromWishlist(product.id)}>
            <X />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">price ${product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2"></CardFooter>
    </Card>
  );
}

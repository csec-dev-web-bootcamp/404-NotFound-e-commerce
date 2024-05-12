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

export default function CartProduct({ product }) {
  const cart = useCart();

  return (
    <Card className="my-4 border-slate-500 shadow-xl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="">{product.title}</CardTitle>
          <Button
            variant="cartBtn"
            size="smicon"
            rounded="full"
            onClick={() => carts.removeFromCart(item.id)}>
            <X />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">${product.totalPrice}</p>
          <div className="flex gap-4 items-center">
            <Button
              variant="cartBtn"
              display="center"
              size="icon"
              onClick={() => carts.minusProductAmount(item.id)}
              font="highXl"
              disabled={product.amount <= 1}>
              <Minus />
            </Button>
            <span>{product.amount}</span>
            <Button
              variant="cartBtn"
              display="center"
              size="icon"
              onClick={() => carts.addProductAmount(item.id)}
              font="highXl">
              <Plus />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-2"></CardFooter>
    </Card>
  );
}

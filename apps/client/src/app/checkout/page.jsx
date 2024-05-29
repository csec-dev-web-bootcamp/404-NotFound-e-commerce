"use client";

const data = [
  {
    id: 1,
    title: "MacBook Pro 13",
    price: 999.99,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
  },
  {
    id: 2,
    title: "iPhone 13 Pro",
    price: 699.99,
    image:
      "https://media.istockphoto.com/id/1309717274/vector/realistic-black-modern-thin-frame-display-computer-monitor-vector-illustration-jpg.jpg?s=612x612&w=0&k=20&c=hWFdkv0V09HqWjqRy2w93ikw2RBAcoxrhXq_9AQsOhQ=",
  },
  {
    id: 3,
    title: "Sony Noise Cancelling Headphones",
    price: 349.99,
    image:
      "https://cdn.mos.cms.futurecdn.net/MfGHFkGhpcwwNQ7VikCkej-1200-80.jpg",
  },
];

import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import React from "react";
import { Separator } from "../../components/ui/separator";
import { useCart } from "@app/client/store/cart-store";
// import { img } from "../../assets/tablet-e-commerce";
const page = () => {
  const carts = useCart();
  const products = carts.cartProducts;
  console.log(carts.cartProducts);
  return (
    <div className=" justify-center dark:bg-gray-900">
      {products.length ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Explore your carts</h1>
          <h1 className="text-xl font-bold">
            You have {products.length} products below
          </h1>
          <div className="container m-20">
            <div className="grid grid-cols-3  gap-8">
              <div className="bg-stone-100 dark:text-white dark:bg-gray-800 col-span-2 p-2 border-[1px] border-slate-300 rounded-lg  flex flex-col shadow-md gap-4">
                {products.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="card border-[2px] rounded-lg  dark:border-slate-700 border-stone-300 shadow-lg w-full grid grid-cols-3 gap-4"
                    >
                      <img
                        src={item.imgUrl}
                        alt=""
                        className="h-full col-span-1 p-1 row-span-3   rounded-lg"
                      />
                      <div className="col-span-2 row-span-3 ">
                        <div className="grid  gap-y-3 h-full p-2">
                          <div className="flex row-span-1 justify-between items-center">
                            <h3 className="text-xl font-semibold">
                              {item.name}
                            </h3>

                            <Button
                              variant="cartBtn"
                              size="smicon"
                              rounded="full"
                              onClick={() => carts.removeFromCart(item.id)}
                            >
                              <X />
                            </Button>
                          </div>
                          <div className="row-span-2 flex flex-col justify-between">
                            <p className="font-bold text-xl">
                              ${item.totalPrice}
                            </p>
                          </div>
                          <div className="row-sapn-2 flex justify-between">
                            <div className="flex gap-2 items-center">
                              <Button
                                variant="cartBtn"
                                display="center"
                                size="icon"
                                onClick={() => carts.addProductAmount(item.id)}
                                font="highXl"
                              >
                                +
                              </Button>
                              <h3 className="text-xl font-bold">
                                {item.amount}{" "}
                                <span className="text-sm">pcs.</span>
                              </h3>
                              <Button
                                variant="cartBtn"
                                display="center"
                                size="icon"
                                onClick={() =>
                                  carts.minusProductAmount(item.id)
                                }
                                font="highXl"
                              >
                                -
                              </Button>
                            </div>
                            <Button variant="cartBtn">
                              Complie only this cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-stone-100 dark:text-white dark:bg-gray-800 col-span-1 max-h-[650px] sticky top-20 p-4 border-[1px] border-slate-300 rounded-lg shadow-lg flex flex-col items-center justify-between  gap-4">
                <p className="text-2xl font-semibold mb-8">
                  Summary of your carts
                </p>
                <div className="info flex flex-col gap-2 w-full ">
                  <p className=" ">
                    Total price <br />
                    <span className="font-bold ">$128.43</span>
                  </p>
                  <Separator
                    orientation="horizontal"
                    className="bg-slate-600"
                  />
                  <p className=" ">
                    Number of products in the cart <br />
                    <span className="font-bold ">{products.length}</span>
                  </p>
                  <Separator
                    orientation="horizontal"
                    className="bg-slate-600"
                  />
                  <p className=" ">
                    Duration for being eligible <br />
                    <span className="font-bold ">may - 12, 2024</span>
                  </p>
                  <Separator
                    orientation="horizontal"
                    className="bg-slate-600"
                  />
                  <p className=" ">
                    Additional informations <br />
                    <span className="font-bold ">updating wait</span>
                  </p>
                  <Separator
                    orientation="horizontal"
                    className="bg-slate-600"
                  />
                  <p className=" ">
                    deliverity informations <br />
                    <span className="font-bold ">Verifided</span>
                  </p>
                </div>
                <Button variant="cartBtn" className="w-full">
                  Start the process
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[100vh] items-center justify-center">
          <p className=" text-3xl font-semibold">
            You don't have any products, please add some products
          </p>
        </div>
      )}
    </div>
  );
};

export default page;

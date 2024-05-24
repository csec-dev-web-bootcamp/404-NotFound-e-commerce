'use client'
import { Button } from "@app/client/components/ui/button";
import React, { useState } from "react";
import Navbar from "@app/client/components/navbar";
import { getProduct } from "@app/client/data/products";
import { useRouter } from "next/router";

export default function ProductDetail({product}) {
    const size = ["S", "M", "L", "XL", "2XL", "3XL"];
    const [selectedSize, setSelectedSize] = useState("");
    const imgs = [
      {
        id: 0,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9s2EWZgotMRmgc3GsX2iCDvE9dGOorGQePCy-1iQyA&s",
      },
      {
        id: 0,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9s2EWZgotMRmgc3GsX2iCDvE9dGOorGQePCy-1iQyA&s",
      },
      {
        id: 0,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9s2EWZgotMRmgc3GsX2iCDvE9dGOorGQePCy-1iQyA&s",
      },
      {
        id: 0,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9s2EWZgotMRmgc3GsX2iCDvE9dGOorGQePCy-1iQyA&s",
      },
    ];
    return (
      <>
        <Navbar />
        <div className="max-w-full  p-6">
          <div className="p-4 flex flex-col lg:flex-row vh">
            <div className="flex items-stretch lg:justify-center justify-around   lg:h-1/2 gap-10 lg:w-1/2">
              <div className="sm:flex flex-col justify-around gap-4 max-w-96 overflow-y-auto hidden ">
                {imgs.map((img) => {
                  return (
                    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    <img
                      className="size-20 border border-gray-300 rounded flex-grow"
                      src={img.url}
                      alt="Thumbnail"
                    />
                  );
                })}
              </div>
              <img
                className=" border size-96 border-gray-300 rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9s2EWZgotMRmgc3GsX2iCDvE9dGOorGQePCy-1iQyA&s"
                alt="Product"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
              <h1 className="lg:text-4xl text-2xl font-semibold text-gray-800">
                This Ben Hogan Men's Solid Ottoman Golf Polo Shirt
              </h1>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold">4.8</span>
                <span className="ml-2 text-gray-600">(188 Reviews)</span>
              </div>
              <div className="mt-4 flex flex-col">
                <span className=" font-bold text-3xl text-grey-800">
                  $187.500 
                </span>
                <div className="mt-2">
                  <span className="ml-2 text-red-600 line-through">$250.000</span>
                  <span className="ml-2 text-green-600">25% off</span>
                </div>
              </div>
              <div className="mt-8">
                <span className="font-semibold text-xl text-gray-800">
                  Select Size
                </span>
                <div className="flex flex-wrap space-x-2 mt-2 gap-y-4">
                  {size.map((size) => (
                    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                    // biome-ignore lint/style/useSelfClosingElements: <explanation>
                    <Button
                      onClick={() => setSelectedSize(size)}
                      className={
                        selectedSize === size
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-800"
                      }
                      variant="none"
                      size="lg"
                      key={size}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col md:items-center flex-row mt-6  ">
                <Button
                  size="lg"
                  className="w-full xl:w-2/3 mt-6 mx-3"
                  variant="secondary"
                >
                  Buy this item
                </Button>
  
                <Button
                  size="lg"
                  className="w-full xl:w-2/3 mt-6 mx-3"
                  variant="default"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Product Details</h2>
            <p className="mt-2 text-gray-600">
              This Ben Hogan Men's Solid Ottoman Golf Polo Shirt makes for
              versatile casual wear or golf apparel. Built-in moisture wicking and
              sun protection keep you feeling dry while blocking out harmful UV
              rays. Durable textured Ottoman fabric and a ribbed collar with
              three-button placket give it classic polo style. The solid color
              makes this golf top easy to pair up with any pants or shorts for
              style that looks great both on and off the course.
            </p>
            <div className="mt-4">
              <p>
                <strong>Package Dimensions:</strong> 27.3 x 24.8 x 4.9 cm; 180 g
              </p>
              <p>
                <strong>Specification:</strong> Moisture Wicking, Stretchy, SPF/UV
                Protection, Easy Care
              </p>
              <p>
                <strong>Date First Available:</strong> August 08, 2023
              </p>
              <p>
                <strong>Department:</strong> Mens
              </p>
            </div>
          </div>
        </div>
      </>
    );
  
}

"use client";
import { Button } from "@app/client/components/ui/button";
import React, { useState } from "react";
import Navbar from "@app/client/components/navbar";

const ProductPage = () => {
  const size = ["S", "M", "L", "XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <>
      <Navbar />
      <div className="max-w-full  p-6">
        <div className="p-4 flex flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:w-1/2">
            <img
              className="w-full h-auto border border-gray-300 rounded"
              src="https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
              alt="Product"
            />
            <div className="flex mt-4 space-x-2 overflow-x-auto max-w-1/2">
              <img
                className="w-44 h-40 border border-gray-300 rounded"
                src="https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
                alt="Thumbnail"
              />
              <img
                className="w-44 h-40 border border-gray-300 rounded"
                src="https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
                alt="Thumbnail"
              />
              <img
                className="w-44 h-40 border border-gray-300 rounded"
                src="https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
                alt="Thumbnail"
              />
              <img
                className="w-44 h-40 border border-gray-300 rounded"
                src="https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
                alt="Thumbnail"
              />
              <img
                className="w-44 h-40 border border-gray-300 rounded"
                src="https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg"
                alt="Thumbnail"
              />
            </div>
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
};

export default ProductPage;

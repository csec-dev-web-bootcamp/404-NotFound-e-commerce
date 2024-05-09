"use client";

import { useCart } from "@app/client/store/cart-store";
import React from "react";

const Card = () => {
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
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 3,
      title: "Sony Noise Cancelling Headphones",
      price: 349.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 4,
      title: "Apple Watch Series 7",
      price: 399.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 5,
      title: "iPad Air 4",
      price: 599.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 6,
      title: "AirPods Pro",
      price: 249.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 7,
      title: "Seagate External Hard Drive",
      price: 79.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 8,
      title: "PlayStation 5 Console",
      price: 499.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 9,
      title: "Fitbit Charge 5",
      price: 179.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 10,
      title: "Canon EOS R5 Camera",
      price: 3799.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 11,
      title: "Bose Bluetooth Speaker",
      price: 299.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 12,
      title: "HP OfficeJet Pro Printer",
      price: 229.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 13,
      title: "Dell 4K Monitor",
      price: 629.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 14,
      title: "Logitech Wireless Keyboard",
      price: 99.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 15,
      title: "Razer Gaming Mouse",
      price: 69.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 16,
      title: "Philips Smart Bulb Kit",
      price: 199.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 17,
      title: "North Face Recon Backpack",
      price: 99.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 18,
      title: "Anker Portable Charger",
      price: 49.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 19,
      title: "AmazonBasics Lightning Cable",
      price: 12.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 20,
      title: "Logitech HD Webcam",
      price: 69.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 21,
      title: "Linksys Wi-Fi Router",
      price: 149.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 22,
      title: "SanDisk SDXC Memory Card",
      price: 34.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 23,
      title: "Samsung USB Flash Drive",
      price: 24.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 24,
      title: "Logitech Gaming Mouse",
      price: 79.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
    {
      id: 25,
      title: "AmazonBasics HDMI Cable",
      price: 8.99,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
    },
  ];
  var cart = useCart();
  const addToCart = (data) => {
    console.log(data);
    cart.addToCart(data);
    // console.log(cart.cartProducts);
  };
  return (
    <div className="flex w-full justify-center  ">
      <div className="flex max-w-[1300px] flex-wrap gap-5 ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[300px] p-2 gap-4 flex border-[1px] border-slate-500 flex-col rounded-lg shadow-lg">
              <div className="">
                <img
                  src={item.image}
                  alt={`${item.title} imgsss`}
                />
              </div>
              <div className="">
                <h2 className="font-semibold text-center">{item.title}</h2>
                <p className="text-blue-700 text-center">{item.price}</p>
                <div className="flex">
                  <button
                    className="w-full bg-slate-700 text-white text-lg rounded-lg"
                    onClick={() => addToCart(item.id)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;

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
  {
    id: 4,
    title: "Apple Watch Series 7",
    price: 399.99,
    image:
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_hero_10052021_big.jpg.large.jpg",
  },
  {
    id: 5,
    title: "iPad Air 4",
    price: 599.99,
    image:
      "https://www.cultofmac.com/wp-content/uploads/2020/09/CD387101-6D45-4664-A623-7D250668F782.jpeg",
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

import Image from "next/image";
import React from "react";
// import { img } from "../../assets/tablet-e-commerce";
const page = () => {
  return (
    <div className="w-screen justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          Checkout products that are added to your cart
        </h1>
        <div className="card-container ">
          <div className="max-w-[1400px] flex flex-col lg:flex-row rounded-lg border-slate-400 shadow-lg p-5 m-10">
            <div className="carts flex flex-col border-2 border-slate-600 rounded-lg w-full">
              <div className="product flex w-full rounded-lg p-5 m-4">
                <img
                  width={50}
                  height={50}
                  alt="my-image"
                  src="./tablet-e-commerce"
                />
                <div className="flex flex-col">
                  <p className="text-2xl">product title</p>
                  <div className="flex">
                    <div className="actions">
                      <button className="p-4 rounded-md border-2">Add</button>
                      <button className="p-4 rounded-md border-2">Sub</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product flex w-full rounded-lg p-5 m-4">
                <img
                  width={50}
                  height={50}
                  alt="my-image"
                  src="./tablet-e-commerce"
                />
                <div className="flex flex-col">
                  <p className="text-2xl">product.title</p>
                  <div className="flex">
                    <div className="actions">
                      <button className="p-4 rounded-md border-2">Add</button>
                      <button className="p-4 rounded-md border-2">Sub</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product flex w-full rounded-lg p-5 m-4">
                <img
                  width={50}
                  height={50}
                  alt="my-image"
                  src="./tablet-e-commerce"
                />
                <div className="flex flex-col">
                  <p className="text-2xl">product.title</p>
                  <div className="flex">
                    <div className="actions">
                      <button className="p-4 rounded-md border-2">Add</button>
                      <button className="p-4 rounded-md border-2">Sub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="st flex flex-col border-2 border-slate-600 rounded-lg max-w-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              consequatur, tempore eligendi veniam deleniti ea nemo fuga nobis
              maiores dolores vel ab sequi totam veritatis eaque dolore
              praesentium. Magni, perferendis.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vero consequatur, tempore eligendi
              veniam deleniti ea nemo fuga nobis maiores dolores vel ab sequi
              totam veritatis eaque dolore praesentium. Magni, perferendis.Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Vero
              consequatur, tempore eligendi veniam deleniti ea nemo fuga nobis
              maiores dolores vel ab sequi totam veritatis eaque dolore
              praesentium. Magni, perferendis.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vero consequatur, tempore eligendi
              veniam deleniti ea nemo fuga nobis maiores dolores vel ab sequi
              totam veritatis eaque dolore praesentium. Magni, perferendis.Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Vero
              consequatur, tempore eligendi veniam deleniti ea nemo fuga nobis
              maiores dolores vel ab sequi totam veritatis eaque dolore
              praesentium. Magni, perferendis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

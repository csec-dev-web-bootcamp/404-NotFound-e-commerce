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

import ProductsCard from "./ProductsCard";

export default async function CardsContainer() {
  return (
    <div className="font-medium">
      <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";

export default function AddProducts() {
  return (
    <div className="px-4">
      <h2 className="text-bold py-4 text-xl">Add a Product</h2>
      <h3 className="text-bold">Product Title</h3>
      <input
        type="text"
        className="border w-full"
      />
      <h3>Product Description</h3>
      <textarea className="w-full h-16 border-slate-700" />
      <h3>Display images</h3>
      <input
        className="border-slate-700"
        type="file"
      />
    </div>
  );
}

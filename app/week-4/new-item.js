"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    alert(`You selected a quantity of ${quantity}`);
    setQuantity(1); // Reset the form
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Quantity</h2>
      <div className="flex items-center mb-4">
        <button
          className="px-3 py-1 bg-gray-300 rounded-l disabled:opacity-50"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="px-4 py-2 border-t border-b">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-300 rounded-r disabled:opacity-50"
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}
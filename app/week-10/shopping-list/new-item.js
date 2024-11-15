"use client";
import React, { useState } from "react";

const generateRandomId = () => Math.random().toString(36).slice(2, 11) + Date.now().toString(36);


export default function NewItem({onAddItem}) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const item = {
      id: generateRandomId(),
      name: name,
      quantity: quantity,
      category: category,
    };
  
    console.log(item);
  
onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("");
  };

  return (
<div className="p-4">
  <h2 className="text-xl font-bold mb-4">Add New Item</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded text-black"
        placeholder="Enter item name"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2" htmlFor="quantity">
        Select Quantity
      </label>
      <div className="flex items-center">
        <button
          type="button"
          className="px-3 py-1 bg-gray-300 rounded-l disabled:opacity-50"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="px-4 py-2 border-t border-b">{quantity}</span>
        <button
          type="button"
          className="px-3 py-1 bg-gray-300 rounded-r disabled:opacity-50"
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2" htmlFor="category">
        Category
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-2 border rounded text-black"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
    </div>

    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Submit
    </button>
  </form>
</div>
  );
}

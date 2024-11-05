import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li 
            className="flex justify-between items-center p-4 border-b border-gray-300 cursor-pointer"
            onClick={() => onSelect(name)}
        >
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{category}</div>
            <div className="text-lg font-bold">{quantity}</div>
        </li>
    );
};

export default Item;
